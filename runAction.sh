#!/bin/bash
export RUNNER_ALLOW_RUNASROOT="1"

# Install jq
snap install jq

# Install Docker
apt update -y
apt install -y \
  apt-transport-https \
  ca-certificates \
  curl \
  gnupg \
  lsb-release
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo \
  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
apt update -y
apt install -y docker-ce docker-ce-cli containerd.io

# Install Git LFS
apt install -y git-lfs

# Install GCP Disk Space Monitoring
curl -sSO https://dl.google.com/cloudagents/add-monitoring-agent-repo.sh && sudo bash add-monitoring-agent-repo.sh && sudo apt-get update -y && sudo apt-get install -y stackdriver-agent && sudo service stackdriver-agent start

# Install Node and NPM
apt install -y nodejs npm

# Add swap space
SWAPSPACE=$(curl -f http://metadata.google.internal/computeMetadata/v1/instance/attributes/SWAPSPACE -H "Metadata-Flavor: Google")
fallocate -l $SWAPSPACE /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
swapon --show

# Prepare Actinon Execution

echo $(curl -f http://metadata.google.internal/computeMetadata/v1/instance/attributes/SA_KEY -H "Metadata-Flavor: Google") > /saKey.json
GH_API_TOKEN=$(curl -f http://metadata.google.internal/computeMetadata/v1/instance/attributes/GH_API_TOKEN -H "Metadata-Flavor: Google")
UUID=$(curl -f http://metadata.google.internal/computeMetadata/v1/instance/attributes/UUID -H "Metadata-Flavor: Google")
LABEL=$(curl -f http://metadata.google.internal/computeMetadata/v1/instance/attributes/LABEL -H "Metadata-Flavor: Google")

gcloud auth activate-service-account --key-file /saKey.json
GH_ACTION_TOKEN_RESPONSE=$(curl -u opencascade.js-build:$GH_API_TOKEN   -X POST   -H "Accept: application/vnd.github.v3+json"   https://api.github.com/repos/donalffons/opencascade.js/actions/runners/registration-token)
GH_ACTION_TOKEN=$(echo $GH_ACTION_TOKEN_RESPONSE | jq -r ".token")

mkdir actions-runner && cd actions-runner
curl -o actions-runner-linux-x64-2.278.0.tar.gz -L https://github.com/actions/runner/releases/download/v2.278.0/actions-runner-linux-x64-2.278.0.tar.gz
tar xzf ./actions-runner-linux-x64-2.278.0.tar.gz
./config.sh --unattended --url https://github.com/donalffons/opencascade.js --token $GH_ACTION_TOKEN --replace --name opencascade-js-build-$UUID --labels $LABEL
./run.sh --once || true
sleep 60

curl -u opencascade.js-build:$GH_API_TOKEN -X DELETE -H "Accept: application/vnd.github.v3+json" https://api.github.com/repos/donalffons/opencascade.js/actions/runners/opencascade-js-build-$UUID

gcloud compute instances delete opencascade-js-build-$UUID --zone us-central1-a -q
