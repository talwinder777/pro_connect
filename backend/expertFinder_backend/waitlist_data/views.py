import base64
from email.mime.text import MIMEText
from googleapiclient.discovery import build
from google.oauth2 import service_account
import logging

# Get a logger instance for the current module
logger = logging.getLogger(__name__)


from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import ExpertEmail, ClientEmail

# Define the path to the service account key file
SERVICE_ACCOUNT_FILE = "/home/ubuntu/seekexpert-f0c414e9a7a1.json"

# Define the scopes for Gmail API
SCOPES = ['https://www.googleapis.com/auth/gmail.send']

@csrf_exempt
def save_expert_email(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        if email:
            ExpertEmail.objects.create(email=email)
            send_email(email)
            return JsonResponse({'success': True}, status=200)
    return JsonResponse({'success': False}, status=400)

@csrf_exempt
def save_client_email(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        if email:
            ClientEmail.objects.create(email=email)
            return JsonResponse({'success': True}, status=200) 
    return JsonResponse({'success': False}, status=400)

def create_message(sender, to, subject, message_text):
    logger.info("-----------creating message---------------")
    message = MIMEText(message_text)
    message['to'] = to
    message['from'] = sender
    message['subject'] = subject
    return {'raw': base64.urlsafe_b64encode(message.as_bytes()).decode()}

def send_message(service, user_id, message):
    try:
        message = (service.users().messages().send(userId=user_id, body=message)
                   .execute())
        logger.info('Message Id: %s' % message['id'])
        return message
    except Exception as e:
        logger.info('An error occurred: %s' % e)
        return None

def get_credentials():
    credentials = service_account.Credentials.from_service_account_file(
        SERVICE_ACCOUNT_FILE, scopes=SCOPES)
    logger.debug(f"credentails are {credentials}\n")
    return credentials

def send_email(email):
    credentials = get_credentials()
    creds = credentials.with_subject("admin@multiplyfocus.com")
    service = build('gmail', 'v1', credentials=creds)

    sender = "admin@multiplyfocus.com"
    to = email
    subject = "Testing sending the email"
    message_text = "Hey There! \n We are so thrilled to have part of our journey to connect experts with advice seekers.\n Together we going to build the future with no gaps"

    message = create_message(sender, to, subject, message_text)
    send_message(service, "me", message)