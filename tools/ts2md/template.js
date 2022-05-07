const template = `
## API
<% schema.map(item => { %>
### <%- item.name %>
<% if (item.interfaceComments && item.interfaceComments.length > 0) { %>
  <% item.interfaceComments.map(comment => { _%>
> <%= comment %>
  <% }) _%>
<% } %>

|参数|说明|类型|必须|
|--|--|--|--|
<% item.properties.map(property => { _%>
|<%= property.name %>|<%= property.description?property.description: "应用于该名称的样式类" %>|<%- property.type %>|<%= property.required?"是":"否" %>|
<% }) _%>
<% }) _%>
`;

module.exports = {
  template
};
