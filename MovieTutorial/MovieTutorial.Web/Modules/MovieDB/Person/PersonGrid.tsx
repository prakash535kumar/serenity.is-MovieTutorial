import { EntityGrid } from '@serenity-is/corelib';
import { PersonColumns, PersonRow, PersonService } from '../../ServerTypes/MovieDB';
import { PersonDialog } from './PersonDialog';

export class PersonGrid extends EntityGrid<PersonRow> {
    static [Symbol.typeInfo] = this.registerClass("MovieTutorial.MovieDB.");

    protected getColumnsKey() { return PersonColumns.columnsKey; }
    protected getDialogType() { return PersonDialog; }
    protected getRowDefinition() { return PersonRow; }
    protected getService() { return PersonService.baseUrl; }
}