export function MyDirective() {
    'ngInject';

    let directive = {
        templateUrl: 'app/components/myDirective/my-directive.tpl.html',
        restrict: 'E'
    };

    return directive;
}
