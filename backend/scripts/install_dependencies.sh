#!/bin/bash

# Update package index and install required packages
sudo apt-get update
sudo apt-get install -y python3-pip apache2 libapache2-mod-wsgi-py3
cd /home/ubuntu/expertFinder_backend

# Define the path to the virtual environment
VENV_PATH="/home/ubuntu/expertFinder_backend/backendEnv"

# Check if the virtual environment exists
if [ ! -d "$VENV_PATH" ]; then
    # Create the virtual environment
    virtualenv backendEnv
fi

# Activate the virtual environment
source "$VENV_PATH/bin/activate"


# Install Django and other Python dependencies
pip3 install django
pip3 install mysqlclient

# Apply Django migrations
python3 manage.py makemigrations
python3 manage.py migrate

#collect static content
python3 manage.py collectstatic

#restart apache2 server
sudo systemctl restart apache2
