
Steps to run multinode colyseus game server
    > Change the root folder name to 'colyseus'
    > Install docker
    > Launch docker desktop
    > To Build the conatiner, change image url in Colyseus/Makefile and Colyseus/gameserver.yaml and run commands 
        cd colyseus
        make build
    > To upload the conatainer on server run command "docker push {your url}/colyseus:{tage}"
    > one image conatiner image is already uploaded on "gcr.io/friendly-sensor-272112/colyseus:0.5"
    > update gameserver.yaml and fleet.yaml with conatainer image url
    > You can run kubernetes locally by installing minikube
    > for GKE- create a kubenetes cluster with more than one node
    > open the command prompt from GCP console
    > run these commands to install agones in kubernetes
        kubectl create namespace agones-system
        kubectl apply -f https://raw.githubusercontent.com/googleforgames/agones/release-1.28.0/install/yaml/install.yaml

    > run the below command to create a multi node colyseus game server
        kubectl apply -f https://raw.githubusercontent.com/prohit/colyseus-agones/main/colyseus/fleet.yaml

    > run "kubectl get gs" to see the status of all game servers
    > run "kubectl logs {gameserver-name} colyseus -f" to check the log of particular game server


TODO:
Connect to match maker and select a server which satify the match making rules.
