Hey there!

This is a basic setup of a react-node-postgres setup fully containerized in Docker. 

To get started, install/update your Docker version.  I'm using Docker v25.0.3 in Ubuntu (WSL2) & Docker Desktop 4.28.0 in Windows today.  

Then navigate to an empty directory where you want to store the project files and execute:
git clone https://github.com/fultonardo/react-node-postgres-docker.git

Once things are finished downloading:
cd react-node-postgres-docker/
docker-compose build && docker-compose down && docker-compose up
-or-
docker-compose build && docker-compose down && docker-compose up -d

Once the docker containers are up and running, poke around the web page at localhost:3000

Happy hacking!

![image](https://github.com/fultonardo/react-node-postgres-docker/assets/30834416/b8c61858-aad7-470f-ba24-4975c42e061c)

