javascript:(function() {
    let top = prompt("`top` value? default is 50.")

    if (top == "") {
        top = "50"
    }

    function fixUploads() {
        document.querySelectorAll('[id^="popups-"]')[1].setAttribute("style", "height: 254px; top: 256.25px;");
        document.getElementsByClassName("submit-buttons import-view-submit-buttons")[0].style.cssText = "";
        document.getElementsByClassName("popups-body")[0].style.cssText = "";

        document.getElementById("s-drop-item-submit-wrapper").style.cssText = "";
        document.getElementById("dropbox-submit-resources-tab-content").style.cssText = "";
        document.getElementById("s-library-import-select-wrapper-form").style.cssText = "";
        document.getElementById("s-library-import-select-wrapper-form").children[0].style.cssText = "";
        document.getElementById("resources-left-menu-wrapper").style.cssText = "";
        document.getElementById("library-wrapper").style.cssText = "";
        document.getElementById("library-left").style.cssText = "";
        document.getElementById("library-main").style.cssText = "";
        document.getElementById("library-main").style.cssText = "";
    }

    function fixCreate() {
        document.querySelectorAll('[id^="popups-"]')[1].setAttribute("style", "height: 499px; top: 195px;");
        document.getElementsByClassName("submit-buttons import-view-submit-buttons")[0].style.cssText = "";
        document.getElementsByClassName("popups-body")[0].style.cssText = "";

        document.getElementById("s-drop-item-submit-wrapper").style.cssText = "";
        document.getElementById("dropbox-submit-resources-tab-content").style.cssText = "";
        document.getElementById("s-library-import-select-wrapper-form").style.cssText = "";
        document.getElementById("s-library-import-select-wrapper-form").children[0].style.cssText = "";
        document.getElementById("resources-left-menu-wrapper").style.cssText = "";
        document.getElementById("library-wrapper").style.cssText = "";
        document.getElementById("library-left").style.cssText = "";
        document.getElementById("library-main").style.cssText = "";
        document.getElementById("library-main").style.cssText = "";
    }

    function fixResources() {
        document.querySelectorAll('[id^="popups-"]')[1].setAttribute("style", `height: 750px; width: 1250px; top: ${top}px;`);
        document.getElementsByClassName("submit-buttons import-view-submit-buttons")[0].setAttribute("style", "width: 98.3%;");
        document.getElementsByClassName("popups-body")[0].setAttribute("style", "height: 90%;");

        document.getElementById("s-drop-item-submit-wrapper").setAttribute("style", "height: 100%;");
        document.getElementById("dropbox-submit-resources-tab-content").setAttribute("style", "height: 100%;");
        document.getElementById("s-library-import-select-wrapper-form").setAttribute("style", "height: 100%;");
        document.getElementById("s-library-import-select-wrapper-form").children[0].setAttribute("style", "height: 100%;");
        document.getElementById("resources-left-menu-wrapper").setAttribute("style", "height: 100%;");
        document.getElementById("library-wrapper").setAttribute("style", "height: 100%;");
        document.getElementById("library-left").setAttribute("style", "height: 98%;");
        document.getElementById("library-main").setAttribute("style", "height: 96%;");
        document.getElementById("library-main").setAttribute("style", "height: 96%; width: 81%;");
    }

    fixUploads();
    fixCreate();
    fixResources();

    document.getElementById("dropbox-submit-upload-tab").addEventListener("click", fixUploads);
    document.getElementById("dropbox-submit-create-tab").addEventListener("click", fixCreate);
    document.getElementById("dropbox-submit-resources-tab").addEventListener("click", fixResources);
})();