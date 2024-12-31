from django.shortcuts import render
from .models import Banco
from .serializers import Myserializer
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.
@api_view(['GET','POST'])
def API(request):
    if request.method == 'POST':
        name = request.data.get('name')
        email = request.data.get('email')
        message = request.data.get('message')
        dados = Banco(name=name, email=email, message=message)
        #dados = Banco(name="Fernando", email="@gmail", message="ola mundo")
        dados.save()
        return Response("Dados incluidos com sucesso")

    banco_dados = Banco.objects.all()
    serializer = Myserializer(banco_dados, many=True)
    return Response(serializer.data)
