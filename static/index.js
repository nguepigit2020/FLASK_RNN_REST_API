function submitQuery() {
  console.log('hello')
  const imageInput = document.querySelector('#input'); // Assuming you have an input element for selecting the file
  const file = imageInput.files[0]; // Get the selected file
  const url = "/predict";
  const http = new XMLHttpRequest();
  const formData = new FormData();

  formData.append('file', file); // Append the file to the FormData object with a key name 'image'

  http.open("POST", url);
  http.send(formData);

  http.onload = function() {
    const predictionElement = document.querySelector("#class-pred");
    if (http.status === 200) {
      const response_obj = http.response;
      predictionElement.textContent = `Predicted class from the model: ${response_obj}`;
    } else {
      predictionElement.textContent = "An error occurred";
    }
  };
}

function clearFile() {
  const imageInput = document.querySelector('#input');
   const predictionElement = document.querySelector("#class-pred");
  imageInput.value = ''; // Reset the input element value to clear the selected file
  predictionElement.textContent = ''
}
