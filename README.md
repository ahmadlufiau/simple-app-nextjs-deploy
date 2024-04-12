## NextJS deploy using Github Actions
- NextJS 14
- EC2 AWS
  
## Check this file
- [Dockerfile](https://github.com/ahmadlufiau/simple-app-nextjs-deploy/blob/main/Dockerfile)
- [cicd.yml](https://github.com/ahmadlufiau/simple-app-nextjs-deploy/blob/main/.github/workflows/cicd.yml)

## Additional
- Nginx still manually config not using docker. Here example config in the server

```
server {
    listen 80;
    listen [::]:80;
    server_name your_domain;

    # Redirect HTTP to HTTPS
    location / {
        return 301 https://$server_name$request_uri;
    }
}

server {
    listen 443 ssl;
    listen [::]:443 ssl;
    server_name your_domain;

    ssl_certificate path_ssl_public_key
    ssl_certificate_key path_ssl_private_key

    # Other SSL settings can be added here
    
    location / {
        proxy_pass IP:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Make sure allow traffic from port 80 and 443
- Check sudo ufw status
- sudo ufw allow 443/tcp
- sudo ufw allow 80/tcp

# Url Demo 
- https://nextjs.ahmadlufiau.com/
- https://nextjs.ahmadlufiau.com/example (sample page)
- https://nextjs.ahmadlufiau.com/api-example (sample call API)