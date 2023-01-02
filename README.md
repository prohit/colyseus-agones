
Steps to run multi node colyseus game server
   > Install docker
   > Launch docker desktop
   > To Build the container, change image url in Makefile, gameserver.yaml and fleet.yaml and run commands.
        cd colyseus
        make build
   > To upload the container on server run command 
        docker push {your url}/colyseus:{tag}
   > current container image url "gcr.io/friendly-sensor-272112/colyseus:0.5"
   > update gameserver.yaml and fleet.yaml with container image url
   > You can run kubernetes locally by installing minikube
   > for GKE- create a kubernetes cluster with more than one node
   > open the command prompt from GCP console
   > run these commands to install agones in kubernetes
       kubectl create namespace agones-system
       kubectl apply -f https://raw.githubusercontent.com/googleforgames/agones/release-1.28.0/install/yaml/install.yaml

   > run the below command to create a multi node colyseus game server
       kubectl apply -f https://raw.githubusercontent.com/prohit/colyseus-agones/main/colyseus/fleet.yaml

   > run "kubectl get gs" to see the status of all game servers
   > run "kubectl logs {gameserver-name} colyseus -f" to check the log of particular game server
   > run "kubectl delete fleet colyseus" to delete the fleet of game servers


TODO:
Connect to a matchmaker and select a server which satisfies the matchmaking rules.
