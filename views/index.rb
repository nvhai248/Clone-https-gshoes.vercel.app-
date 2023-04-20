require 'erb'

# Define the variable to be passed to the HTML template
ruby_variable = "This text was generated using Ruby."

# Read the contents of the HTML file
html_file = File.read('./views/index.html')

# Create a new ERB template based on the HTML file
template = ERB.new(html_file)

# Render the template with the variables
html_result = template.result(binding)

# Send the HTML response to the client
puts html_result
