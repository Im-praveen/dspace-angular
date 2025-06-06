import { Injectable } from '@angular/core';
import {
  Observable,
  of,
} from 'rxjs';

import { Breadcrumb } from '../../breadcrumbs/breadcrumb/breadcrumb.model';
import { BreadcrumbsProviderService } from './breadcrumbsProviderService';

/**
 * The postfix for i18n breadcrumbs
 */
export const BREADCRUMB_MESSAGE_POSTFIX = '.breadcrumbs';

/**
 * Service to calculate i18n breadcrumbs for a single part of the route
 */
@Injectable({
  providedIn: 'root',
})
export class I18nBreadcrumbsService implements BreadcrumbsProviderService<string> {

  /**
   * Method to calculate the breadcrumbs
   * @param key The key used to resolve the breadcrumb
   * @param url The url to use as a link for this breadcrumb
   */
  getBreadcrumbs(key: string, url: string): Observable<Breadcrumb[]> {
    return of([new Breadcrumb(key + BREADCRUMB_MESSAGE_POSTFIX, url)]);
  }
}
