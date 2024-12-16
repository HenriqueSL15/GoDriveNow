function ErrorPopUp() {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      {/* Pop-up (Modal) */}

      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg w-1/3">
          {/* Header do modal */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold"></h2>
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700"
              //onClick={togglePopup}
            >
              ✖
            </button>
          </div>

          {/* Conteúdo do modal */}
          <div className="p-4">
            <p>Este é o conteúdo do pop-up. Personalize como quiser!</p>
          </div>

          {/* Footer do modal */}
          <div className="flex justify-end p-4 border-t">
            <button
              type="button"
              className="px-4 py-2 mr-2 text-gray-500 bg-gray-200 rounded hover:bg-gray-300"
              //onClick={togglePopup}
            >
              Cancelar
            </button>
            <button
              type="button"
              className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ErrorPopUp;
