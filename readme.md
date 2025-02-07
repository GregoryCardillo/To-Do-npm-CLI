Usage
# Add a Task
node index.js add "Drink a Coffee"
# List all Tasks
node index.js list
or by list the tasks by status
# To list the tasks that are marked as to-do
node index.js list to-do

# To list the tasks that are marked as in-progess
node index.js list in-progress

# To list the tasks that are marked as done
node index.js list done
# Update a Task
node index.js update 1 "Drink a Coffee and Do Coding"
Mark Task Status
# Mark as `in-progress` with containing task ID as 1
node index.js mark-in-progress 1

# Mark as `done` with containing task ID as 1
node index.js mark-done 1
Delete a Task
# Delete the task by containing its ID 1
node index.js delete 1 