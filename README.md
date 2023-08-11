### Criando o serviço do Frontend

Na pasta `frontend` executamos:

```bash
sudo docker run --name website -v$(pwd):/usr/share/nginx/html:ro -d -p 3000:80 nginx
# dessa forma estamos mapeando uma pasta local para a pasta principal do NGINX

```

Esse comando irá iniciar um contêiner com o serviço do NGINX

NGINX é um servidor WEB e também servidor de proxy reverso.

- A camada de proxy reverso atua como uma inferface entre cliente (navegadores) e os sevidores de destino. Ao invés de encaminhar as solicitações do cliente diretamente para o servidor destino. O proxy reverso recebe, avalia e só então encaminha para o servidor.
