$(document).ready(function() {
    // Function to add a new task
    function addTask(task) {
      const taskItem = `
        <li class="list-group-item d-flex justify-content-between align-items-center task-item">
          <span>${task}</span>
          <div>
            <button class="btn btn-success btn-sm complete-task">Complete</button>
            <button class="btn btn-danger btn-sm delete-task">Delete</button>
          </div>
        </li>
      `;
      $('#taskList').append(taskItem);
    }

    // Add task on form submission
    $('#taskForm').on('submit', function(e) {
      e.preventDefault();
      const task = $('#taskInput').val().trim();
      if (task) {
        addTask(task);
        $('#taskInput').val(''); // Clear input field
      }
    });

    // Mark a task as complete
    $(document).on('click', '.complete-task', function() {
      $(this).closest('.task-item').toggleClass('completed');
    });

    // Delete a task
    $(document).on('click', '.delete-task', function() {
      $(this).closest('.task-item').remove();
    });
  });