# views.py
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import ExpertEmail, ClientEmail

@csrf_exempt
def save_expert_email(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        if email:
            ExpertEmail.objects.create(email=email)
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
