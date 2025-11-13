import { EntityDialog } from '@serenity-is/corelib';
import { MovieForm, MovieRow, MovieService } from '../../ServerTypes/MovieDB';
import "./MovieDialog.css";

export class MovieDialog extends EntityDialog<MovieRow, any> {
    static [Symbol.typeInfo] = this.registerClass("MovieTutorial.MovieDB.");

    protected getFormKey() { return MovieForm.formKey; }
    protected getRowDefinition() { return MovieRow; }
    protected getService() { return MovieService.baseUrl; }

    protected form = new MovieForm(this.idPrefix);
}