#!/usr/bin/python3
#python version 3.7
import sys 
from  http import server
from http.server import SimpleHTTPRequestHandler 
 
if sys.argv[1:]: 
  port = int(sys.argv[1]) 
else: 
  port = 8000
 
server_address = ('127.0.0.1', port) 
 
httpd = server.HTTPServer(server_address, SimpleHTTPRequestHandler) 
httpd.serve_forever()