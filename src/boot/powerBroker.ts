import { boot } from 'quasar/wrappers';

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default boot(async ({ app, router, Vue, store }) => {
  store.subscribe((mutation: any, state: any) => {
    switch (mutation.type) {
      case 'player/mutateCurrentSong':
        break;
    }
  });
});
