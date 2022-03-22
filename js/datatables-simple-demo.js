window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    const datatablesSimple = document.getElementById('datatablesSimple');
    if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple);
    }
    const datatablesSimpleTwo = document.getElementById('datatablesSimpleTwo');
    if (datatablesSimpleTwo) {
        new simpleDatatables.DataTable(datatablesSimpleTwo);
    }
    const statusTable = document.getElementById('statusTable');
    if (statusTable) {
        new simpleDatatables.DataTable(statusTable);
    }
});
