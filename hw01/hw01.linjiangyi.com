server {
        listen 80;
        listen [::]:80;

        root /home/linjiangyi/hw01/;

        index hw01.html;

        server_name hw01.linjiangyi.com;

        location / {
            try_files $uri $uri/ =404;
        }
}
