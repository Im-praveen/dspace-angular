import { importProvidersFrom, makeEnvironmentProviders } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { submissionEffects } from './submission.effects';
import { submissionReducers, SubmissionState } from './submission.reducers';
import { Action, StoreConfig, StoreModule } from '@ngrx/store';
import { storeModuleConfig } from '../app.reducer';

export const provideSubmission = () => {
  return makeEnvironmentProviders([
    importProvidersFrom(
      StoreModule.forFeature('submission', submissionReducers, storeModuleConfig as StoreConfig<SubmissionState, Action>),
      EffectsModule.forFeature(submissionEffects),
    ),
  ]);
};
