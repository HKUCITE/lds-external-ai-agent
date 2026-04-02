---
sidebar_position: 1
---

# LDS Endpoints to retrieve LD & options

In the LDS External AI Agent Response Specification, the response data includes references to options
and dynamic components in learning designs.

The LDS expose these detail privately using special credentials through API calls in json response:

- List and get individual Components in Courses
- List dynamic options selectable by users in the LDS
- List Patterns that can be used by users in the LDS

The API calls are grouped in a postman collection for calling.
Client id and client secrets are required to call the APIs. Please obtain these via suitable people.

Please download this Postman collection in json file and import it into your Postman:
[LDS Rest API for Chatbot.postman_collection.json](/lds/LDS-Rest-API-for-Chatbot.postman_collection.json)

Note: The latest updated APIs are available in https://lds-test.cite.hku.hk. The updates include simplified outputs in the request for Options (Those requests named with "Simplified"), the addition of the "Options Aggregate" endpoint to get multiple options in a single request, and simplfied outputs in the request for "Learning Design".

Steps:

1.  Download Postman: https://www.postman.com/downloads/
2.  In Postman, Import -> select the json file\
    ![Postman import step](/lds/postman-step-2.png)
3.  Select the Collection. In the Variable Tab, Fill in the "Current Value" of "client_id" and "client_secret" and save.\
    ![Postman update collection](/lds/postman-step-3.png)
4.  Run the Post request "Retrieve Token"\
    ![Postman retrieve token](/lds/postman-step-4.png)
5.  You can run any other request you want \
    5.1. Options - List dynamic options selectable in users in the LDS:\
    ![Options](/lds/postman-options.png) \
    5.2. Learning Design - To get Learning Designs with related components:\
    ![Learning Design](/lds/postman-learning-designs.png)
