function onClickClosePopup() {
	// showInfoIconOnScreen();
}

function showInfoIconOnScreen() {
	// const $btnInfo = document.getElementById("btn_info");
	// $btnInfo.style.display = "block";
	// const $btnMsg = document.getElementById("btn_msg");
	// $btnMsg.style.display = "block";
}

function onClickBtnInfo() {
	window.FlowbiteInstances.getInstance("Modal", "popupWelcomModal")?.show();
}
function onClickBtnSales() {
	window.FlowbiteInstances.getInstance("Modal", "popupSalesModal")?.show();
}
function onClickBtnMsg() {
	window.FlowbiteInstances.getInstance("Modal", "popupMessageModal")?.show();
}

window.onload = () => {
	onClickBtnInfo();
	// onClickBtnMsg();
};
