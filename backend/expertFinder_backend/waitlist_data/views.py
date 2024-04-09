import os
import pickle
import base64
import pandas as pd
from email.mime.text import MIMEText
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from googleapiclient.discovery import build
from google.oauth2.credentials import Credentials


from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import ExpertEmail, ClientEmail

SCOPES = ['https://www.googleapis.com/auth/gmail.send']

@csrf_exempt
def save_expert_email(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        if email:
            ExpertEmail.objects.create(email=email)
            send_email(email)
            return JsonResponse({'success': True})
    return JsonResponse({'success': False}, status=400)

@csrf_exempt
def save_client_email(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        if email:
            ClientEmail.objects.create(email=email)
            return JsonResponse({'success': True})
    return JsonResponse({'success': False}, status=400)

def create_message(sender, to, subject, message_text):
    print("-----------creating message---------------")
    message = MIMEText(message_text)
    message['to'] = to
    message['from'] = sender
    message['subject'] = subject
    return {'raw': base64.urlsafe_b64encode(message.as_bytes()).decode()}

def send_message(service, user_id, message):
    try:
        message = (service.users().messages().send(userId=user_id, body=message)
                   .execute())
        print('Message Id: %s' % message['id'])
        return message
    except Exception as e:
        print('An error occurred: %s' % e)
        return None

def send_email(email):
    print("-------------------in send email function-------------------")
    creds = None
    # The file token.pickle stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.
    if os.path.exists('token.pickle'):
        print("------------token file found in directory-------------")
        with open('token.pickle', 'rb') as token:
            creds = pickle.load(token)
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        print("---------------token file exists alreay--------------")
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                'credentials.json', SCOPES)
            creds = flow.run_local_server(port=0)
        # Save the credentials for the next run
        with open('token.pickle', 'wb') as token:
            pickle.dump(creds, token)
    print("----------going to call the create_message function with service--------------")
    service = build('gmail', 'v1', credentials=creds)

    sender = "admin@multiplyfocus.com"
    to = email
    subject = "Testing sending the email"
    message_text = "Hey There! \n We are so thrilled to have part of our journey to connect experts with advice seekers.\n Together we going to build the future with no gaps"

    message = create_message(sender, to, subject, message_text)
    print("--------------message created successfully-------------------")
    print("--------------calling the send message------------------")
    send_message(service, "me", message)