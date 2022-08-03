import SettingsPage from "../../../util/SettingsPage.js";

class AppearanceSettings extends SettingsPage {
    init() {
        M.FormSelect.init(document.querySelectorAll('select'), {});
        this.registerFormElement('pieces', 'Pieces:', 'select', 'wikipedia.svg');
        this.registerFormElement('board', 'Board:', 'select', 'brown');
    }
}

define({
    title: 'Appearance',
    page: new AppearanceSettings()
});