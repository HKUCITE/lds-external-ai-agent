---
sidebar_position: 3
---

# 8.3 Example Error Responses

Each example shows **invalid request JSON** (input) followed by **error response JSON** (output).

#### **Example 1 — MISSING_REQUIRED_TARGET_FIELD**

**Invalid Request JSON:**

```json
{
  "actions": [
    {
      "target": {},
      "ui": { "presentation": "popup" },
      "payload": {}
    }
  ]
}
```

**Returned Error JSON:**

```json
{
  "status": "error",
  "errors": [
    {
      "code": "MISSING_REQUIRED_TARGET_FIELD",
      "message": "Mandatory field 'context' is missing in target object.",
      "location": "actions[0].target.context",
      "expected_format": {
        "type": "string",
        "allowed_values": [
          "CourseInfo",
          "ILO",
          "DP",
          "PA",
          "CC",
          "Task",
          "Lesson"
        ]
      }
    },
    {
      "code": "MISSING_REQUIRED_TARGET_FIELD",
      "message": "Mandatory field 'context_object_id' is missing in target object.",
      "location": "actions[0].target.context_object_id",
      "expected_format": { "type": "integer" }
    }
  ]
}
```

#### **Example 2 — MISSING_REQUIRED_UI_FIELD**

**Invalid Request JSON:**

```json
{
  "actions": [
    {
      "target": { "context": "CourseInfo", "context_object_id": 123 },
      "ui": {},
      "payload": {}
    }
  ]
}
```

**Returned Error JSON:**

```json
{
  "status": "error",
  "errors": [
    {
      "code": "MISSING_REQUIRED_UI_FIELD",
      "message": "Mandatory field 'presentation' is missing in ui object.",
      "location": "actions[0].ui.presentation",
      "expected_format": {
        "type": "string",
        "allowed_values": ["popup", "sidebar", "tooltip", "highlight", "inline"]
      }
    }
  ]
}
```

#### **Example 3 — MISSING_REQUIRED_PAYLOAD_FIELD**

**Invalid Request JSON:**

```json
{
  "actions": [
    {
      "target": { "context": "ILO", "context_object_id": 456 },
      "ui": { "representation": "sidebar", "presentation": "sidebar" },
      "payload": { "pattern_object": {} }
    }
  ]
}
```

**Returned Error JSON:**

```json
{
  "status": "error",
  "errors": [
    {
      "code": "MISSING_REQUIRED_PAYLOAD_FIELD",
      "message": "Mandatory field 'type[]' is missing in payload for context 'ILO'.",
      "location": "actions[0].payload.pattern_object.type",
      "expected_format": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "id": { "type": "integer" },
            "name": { "type": "string" }
          }
        }
      }
    },
    {
      "code": "MISSING_REQUIRED_PAYLOAD_FIELD",
      "message": "Mandatory field 'statement' is missing in payload for context 'ILO'.",
      "location": "actions[0].payload.pattern_object.statement",
      "expected_format": { "type": "string" }
    }
  ]
}
```

#### **Example 4 — INVALID_FIELD_TYPE**

**Invalid Request JSON:**

```json
{
  "actions": [
    {
      "target": { "context": "CourseInfo", "context_object_id": "abcde" },
      "ui": { "presentation": "popup" },
      "payload": {}
    }
  ]
}
```

**Returned Error JSON:**

```json
{
  "status": "error",
  "errors": [
    {
      "code": "INVALID_FIELD_TYPE",
      "message": "Field 'context_object_id' must be of type integer, but received string.",
      "location": "actions[0].target.context_object_id",
      "expected_format": { "type": "integer" }
    }
  ]
}
```

#### **Example 5 — INVALID_ENUM_VALUE (payload.subjects)**

**Invalid Request JSON:**

```json
{
  "actions": [
    {
      "target": { "context": "CourseInfo", "context_object_id": 123 },
      "ui": { "presentation": "popup" },
      "payload": { "subjects": 12 }
    }
  ]
}
```

**Returned Error JSON:**

```json
{
  "status": "error",
  "errors": [
    {
      "code": "INVALID_ENUM_VALUE",
      "message": "Field 'subjects' must be one of the allowed values.",
      "location": "actions[0].payload.subjects",
      "expected_format": {
        "type": "integer",
        "allowed_values": [1, 2, 3, 4, 5, 6, 7, 8, 9]
      }
    }
  ]
}
```

#### **Example 6 — UNSUPPORTED_CONTEXT**

**Invalid Request JSON:**

```json
{
  "actions": [
    {
      "target": { "context": "UnknownContext", "context_object_id": 123 },
      "ui": { "presentation": "popup" },
      "payload": {}
    }
  ]
}
```

**Returned Error JSON:**

```json
{
  "status": "error",
  "errors": [
    {
      "code": "UNSUPPORTED_CONTEXT",
      "message": "The provided context 'UnknownContext' is not supported.",
      "location": "actions[0].target.context",
      "expected_format": {
        "type": "string",
        "allowed_values": [
          "CourseInfo",
          "ILO",
          "DP",
          "PA",
          "CC",
          "Task",
          "Lesson"
        ]
      }
    }
  ]
}
```

#### **Example 7 — UNSUPPORTED_PRESENTATION**

**Invalid Request JSON:**

```json
{
  "actions": [
    {
      "target": { "context": "CourseInfo", "context_object_id": 123 },
      "ui": { "presentation": "fullscreen" },
      "payload": {}
    }
  ]
}
```

**Returned Error JSON:**

```json
{
  "status": "error",
  "errors": [
    {
      "code": "UNSUPPORTED_PRESENTATION",
      "message": "The provided presentation value 'fullscreen' is not supported.",
      "location": "actions[0].ui.presentation",
      "expected_format": {
        "type": "string",
        "allowed_values": ["popup", "sidebar", "tooltip", "highlight", "inline"]
      }
    }
  ]
}
```
