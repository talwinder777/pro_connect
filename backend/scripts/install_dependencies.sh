#!/bin/bash

# Update package index and install required packages
apt-get update
apt-get install -y python3 python3-pip apache2 libapache2-mod-wsgi-py3

# Install Django and other Python dependencies
pip3 install django
