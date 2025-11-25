---
sidebar_position: 6
---

# 6. Navigation & Directory Display

```json
{
  "action_type": "show_navigation",
  "payload": {
    "navigation_tree": [
      {
        "label": "Navigation Bar Opened",
        "id": "nav_bar_opened",
        "children": [
          {
            "label": "Choose Course Information",
            "id": "choose_course_information",
            "children": [
              {
                "label": "Provide Course name and brief description",
                "id": "provide_course_name_brief_description",
                "children": [
                  {
                    "label": "Refine and organize course descriptions",
                    "id": "refine_organize_course_descriptions",
                    "clickable_buttons": [
                      {
                        "label": "Organize Course Description",
                        "action": {
                          "action_type": "insert_chat_template",
                          "payload": {
                            "template_id": "course_desc_001",
                            "template_name": "Organize Course Description",
                            "template_text": "Refine the course description for: [course_name]",
                            "placeholders": [{ "key": "course_name" }]
                          }
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
}
```
