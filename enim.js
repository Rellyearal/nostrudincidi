$(function() {
  $(".draggable").draggable({
    handle: ".handle",
    cancel: "input, textarea", // Prevent dragging when starting on specified elements
    drag: function(event, ui) {
      // Handle the drag event
    },
    stop: function(event, ui) {
      // Handle the stop event
    }
  });
});
