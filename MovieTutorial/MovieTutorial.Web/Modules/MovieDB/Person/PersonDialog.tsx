import { EntityDialog } from '@serenity-is/corelib';
import { PersonForm, PersonRow, PersonService } from '../../ServerTypes/MovieDB';
import "./PersonDialog.css";

export class PersonDialog extends EntityDialog<PersonRow, any> {
    static [Symbol.typeInfo] = this.registerClass("MovieTutorial.MovieDB.");

    protected getFormKey() { return PersonForm.formKey; }
    protected getRowDefinition() { return PersonRow; }
    protected getService() { return PersonService.baseUrl; }

    protected form = new PersonForm(this.idPrefix);

    protected afterLoadEntity() {
        super.afterLoadEntity();

        this.form.MoviesGrid.personId = this.entityId;
    }
}