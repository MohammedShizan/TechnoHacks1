let result = document.getElementById('result');

        function clearResult() {
            result.textContent = '';
        }

        function appendCharacter(char) {
            result.textContent += char;
        }

        function calculateResult() {
            try {
                result.textContent = eval(result.textContent);
            } catch (error) {
                result.textContent = 'Error';
            }
        }