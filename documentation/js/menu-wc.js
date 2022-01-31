'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">uziapp documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-271629de922173e53de4c18c00ca2b01903b849115caa29f6dfd384bbb85e6683faf5fda040fe35e26f0dd6c81c43bc9af29459f4fb36d3679c6fa1b3b0a19bb"' : 'data-target="#xs-controllers-links-module-AppModule-271629de922173e53de4c18c00ca2b01903b849115caa29f6dfd384bbb85e6683faf5fda040fe35e26f0dd6c81c43bc9af29459f4fb36d3679c6fa1b3b0a19bb"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-271629de922173e53de4c18c00ca2b01903b849115caa29f6dfd384bbb85e6683faf5fda040fe35e26f0dd6c81c43bc9af29459f4fb36d3679c6fa1b3b0a19bb"' :
                                            'id="xs-controllers-links-module-AppModule-271629de922173e53de4c18c00ca2b01903b849115caa29f6dfd384bbb85e6683faf5fda040fe35e26f0dd6c81c43bc9af29459f4fb36d3679c6fa1b3b0a19bb"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-271629de922173e53de4c18c00ca2b01903b849115caa29f6dfd384bbb85e6683faf5fda040fe35e26f0dd6c81c43bc9af29459f4fb36d3679c6fa1b3b0a19bb"' : 'data-target="#xs-injectables-links-module-AppModule-271629de922173e53de4c18c00ca2b01903b849115caa29f6dfd384bbb85e6683faf5fda040fe35e26f0dd6c81c43bc9af29459f4fb36d3679c6fa1b3b0a19bb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-271629de922173e53de4c18c00ca2b01903b849115caa29f6dfd384bbb85e6683faf5fda040fe35e26f0dd6c81c43bc9af29459f4fb36d3679c6fa1b3b0a19bb"' :
                                        'id="xs-injectables-links-module-AppModule-271629de922173e53de4c18c00ca2b01903b849115caa29f6dfd384bbb85e6683faf5fda040fe35e26f0dd6c81c43bc9af29459f4fb36d3679c6fa1b3b0a19bb"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-eeff0dcba6ccad721137e84b71b8a5790f066971ba1bb5ca012cc2e2bd7380253c7d7629c1e3a261cb2c7c178b3f84332fb9861f40d41d51002251e1144dd6b7"' : 'data-target="#xs-injectables-links-module-AuthModule-eeff0dcba6ccad721137e84b71b8a5790f066971ba1bb5ca012cc2e2bd7380253c7d7629c1e3a261cb2c7c178b3f84332fb9861f40d41d51002251e1144dd6b7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-eeff0dcba6ccad721137e84b71b8a5790f066971ba1bb5ca012cc2e2bd7380253c7d7629c1e3a261cb2c7c178b3f84332fb9861f40d41d51002251e1144dd6b7"' :
                                        'id="xs-injectables-links-module-AuthModule-eeff0dcba6ccad721137e84b71b8a5790f066971ba1bb5ca012cc2e2bd7380253c7d7629c1e3a261cb2c7c178b3f84332fb9861f40d41d51002251e1144dd6b7"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CombinationsModule.html" data-type="entity-link" >CombinationsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CombinationsModule-b76d14608daf37cfda7f8c6dfb485568b9299afb21b19f079046834c01537e5b5dbed33e530fe752ae22396198c88f75f8a757ed4ba4ed3c7e290861b2679a7c"' : 'data-target="#xs-controllers-links-module-CombinationsModule-b76d14608daf37cfda7f8c6dfb485568b9299afb21b19f079046834c01537e5b5dbed33e530fe752ae22396198c88f75f8a757ed4ba4ed3c7e290861b2679a7c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CombinationsModule-b76d14608daf37cfda7f8c6dfb485568b9299afb21b19f079046834c01537e5b5dbed33e530fe752ae22396198c88f75f8a757ed4ba4ed3c7e290861b2679a7c"' :
                                            'id="xs-controllers-links-module-CombinationsModule-b76d14608daf37cfda7f8c6dfb485568b9299afb21b19f079046834c01537e5b5dbed33e530fe752ae22396198c88f75f8a757ed4ba4ed3c7e290861b2679a7c"' }>
                                            <li class="link">
                                                <a href="controllers/CombinationsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CombinationsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CombinationsModule-b76d14608daf37cfda7f8c6dfb485568b9299afb21b19f079046834c01537e5b5dbed33e530fe752ae22396198c88f75f8a757ed4ba4ed3c7e290861b2679a7c"' : 'data-target="#xs-injectables-links-module-CombinationsModule-b76d14608daf37cfda7f8c6dfb485568b9299afb21b19f079046834c01537e5b5dbed33e530fe752ae22396198c88f75f8a757ed4ba4ed3c7e290861b2679a7c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CombinationsModule-b76d14608daf37cfda7f8c6dfb485568b9299afb21b19f079046834c01537e5b5dbed33e530fe752ae22396198c88f75f8a757ed4ba4ed3c7e290861b2679a7c"' :
                                        'id="xs-injectables-links-module-CombinationsModule-b76d14608daf37cfda7f8c6dfb485568b9299afb21b19f079046834c01537e5b5dbed33e530fe752ae22396198c88f75f8a757ed4ba4ed3c7e290861b2679a7c"' }>
                                        <li class="link">
                                            <a href="injectables/CombinationsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CombinationsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/Level1Module.html" data-type="entity-link" >Level1Module</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-Level1Module-9d1e2a510792678a0c21ee6094ce917c83fbe9b9f8cca06ba789f0eb8746b8527963656ea58c6c49051b307d7c37ea12fd18f17f676dd2f9d98d8ffb5d9d0254"' : 'data-target="#xs-controllers-links-module-Level1Module-9d1e2a510792678a0c21ee6094ce917c83fbe9b9f8cca06ba789f0eb8746b8527963656ea58c6c49051b307d7c37ea12fd18f17f676dd2f9d98d8ffb5d9d0254"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-Level1Module-9d1e2a510792678a0c21ee6094ce917c83fbe9b9f8cca06ba789f0eb8746b8527963656ea58c6c49051b307d7c37ea12fd18f17f676dd2f9d98d8ffb5d9d0254"' :
                                            'id="xs-controllers-links-module-Level1Module-9d1e2a510792678a0c21ee6094ce917c83fbe9b9f8cca06ba789f0eb8746b8527963656ea58c6c49051b307d7c37ea12fd18f17f676dd2f9d98d8ffb5d9d0254"' }>
                                            <li class="link">
                                                <a href="controllers/Level1Controller.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Level1Controller</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-Level1Module-9d1e2a510792678a0c21ee6094ce917c83fbe9b9f8cca06ba789f0eb8746b8527963656ea58c6c49051b307d7c37ea12fd18f17f676dd2f9d98d8ffb5d9d0254"' : 'data-target="#xs-injectables-links-module-Level1Module-9d1e2a510792678a0c21ee6094ce917c83fbe9b9f8cca06ba789f0eb8746b8527963656ea58c6c49051b307d7c37ea12fd18f17f676dd2f9d98d8ffb5d9d0254"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-Level1Module-9d1e2a510792678a0c21ee6094ce917c83fbe9b9f8cca06ba789f0eb8746b8527963656ea58c6c49051b307d7c37ea12fd18f17f676dd2f9d98d8ffb5d9d0254"' :
                                        'id="xs-injectables-links-module-Level1Module-9d1e2a510792678a0c21ee6094ce917c83fbe9b9f8cca06ba789f0eb8746b8527963656ea58c6c49051b307d7c37ea12fd18f17f676dd2f9d98d8ffb5d9d0254"' }>
                                        <li class="link">
                                            <a href="injectables/Level1Service.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Level1Service</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/Level2Module.html" data-type="entity-link" >Level2Module</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-Level2Module-4d5658619abbee21dfc3b8d117006c94d4c7e9da3063a42faf6c3f48ca822169f536e84d4515ab2d1d96787c601401b684686c098ecfba02d22565c761e0362f"' : 'data-target="#xs-controllers-links-module-Level2Module-4d5658619abbee21dfc3b8d117006c94d4c7e9da3063a42faf6c3f48ca822169f536e84d4515ab2d1d96787c601401b684686c098ecfba02d22565c761e0362f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-Level2Module-4d5658619abbee21dfc3b8d117006c94d4c7e9da3063a42faf6c3f48ca822169f536e84d4515ab2d1d96787c601401b684686c098ecfba02d22565c761e0362f"' :
                                            'id="xs-controllers-links-module-Level2Module-4d5658619abbee21dfc3b8d117006c94d4c7e9da3063a42faf6c3f48ca822169f536e84d4515ab2d1d96787c601401b684686c098ecfba02d22565c761e0362f"' }>
                                            <li class="link">
                                                <a href="controllers/Level2Controller.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Level2Controller</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-Level2Module-4d5658619abbee21dfc3b8d117006c94d4c7e9da3063a42faf6c3f48ca822169f536e84d4515ab2d1d96787c601401b684686c098ecfba02d22565c761e0362f"' : 'data-target="#xs-injectables-links-module-Level2Module-4d5658619abbee21dfc3b8d117006c94d4c7e9da3063a42faf6c3f48ca822169f536e84d4515ab2d1d96787c601401b684686c098ecfba02d22565c761e0362f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-Level2Module-4d5658619abbee21dfc3b8d117006c94d4c7e9da3063a42faf6c3f48ca822169f536e84d4515ab2d1d96787c601401b684686c098ecfba02d22565c761e0362f"' :
                                        'id="xs-injectables-links-module-Level2Module-4d5658619abbee21dfc3b8d117006c94d4c7e9da3063a42faf6c3f48ca822169f536e84d4515ab2d1d96787c601401b684686c098ecfba02d22565c761e0362f"' }>
                                        <li class="link">
                                            <a href="injectables/Level2Service.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Level2Service</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SubjectsModule.html" data-type="entity-link" >SubjectsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-SubjectsModule-d4002b239ca743930b92cf33c545320916a54a1c75c45d86db75fb873fb46aba42dca4366cae728b310484e0685800311358a7c054b4fbb4c2745bd8129f9a31"' : 'data-target="#xs-controllers-links-module-SubjectsModule-d4002b239ca743930b92cf33c545320916a54a1c75c45d86db75fb873fb46aba42dca4366cae728b310484e0685800311358a7c054b4fbb4c2745bd8129f9a31"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SubjectsModule-d4002b239ca743930b92cf33c545320916a54a1c75c45d86db75fb873fb46aba42dca4366cae728b310484e0685800311358a7c054b4fbb4c2745bd8129f9a31"' :
                                            'id="xs-controllers-links-module-SubjectsModule-d4002b239ca743930b92cf33c545320916a54a1c75c45d86db75fb873fb46aba42dca4366cae728b310484e0685800311358a7c054b4fbb4c2745bd8129f9a31"' }>
                                            <li class="link">
                                                <a href="controllers/SubjectsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubjectsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SubjectsModule-d4002b239ca743930b92cf33c545320916a54a1c75c45d86db75fb873fb46aba42dca4366cae728b310484e0685800311358a7c054b4fbb4c2745bd8129f9a31"' : 'data-target="#xs-injectables-links-module-SubjectsModule-d4002b239ca743930b92cf33c545320916a54a1c75c45d86db75fb873fb46aba42dca4366cae728b310484e0685800311358a7c054b4fbb4c2745bd8129f9a31"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SubjectsModule-d4002b239ca743930b92cf33c545320916a54a1c75c45d86db75fb873fb46aba42dca4366cae728b310484e0685800311358a7c054b4fbb4c2745bd8129f9a31"' :
                                        'id="xs-injectables-links-module-SubjectsModule-d4002b239ca743930b92cf33c545320916a54a1c75c45d86db75fb873fb46aba42dca4366cae728b310484e0685800311358a7c054b4fbb4c2745bd8129f9a31"' }>
                                        <li class="link">
                                            <a href="injectables/SubjectsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubjectsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TeacherSubjectModule.html" data-type="entity-link" >TeacherSubjectModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TeacherSubjectModule-12b738bb25d98f60c5d59be30459f3ce3bd469a7cf9d0943d8ce24c2ef11d9342541b070319890b2e948a63988b8c0b60d296a35fb4c65cd0502368e7860c009"' : 'data-target="#xs-controllers-links-module-TeacherSubjectModule-12b738bb25d98f60c5d59be30459f3ce3bd469a7cf9d0943d8ce24c2ef11d9342541b070319890b2e948a63988b8c0b60d296a35fb4c65cd0502368e7860c009"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TeacherSubjectModule-12b738bb25d98f60c5d59be30459f3ce3bd469a7cf9d0943d8ce24c2ef11d9342541b070319890b2e948a63988b8c0b60d296a35fb4c65cd0502368e7860c009"' :
                                            'id="xs-controllers-links-module-TeacherSubjectModule-12b738bb25d98f60c5d59be30459f3ce3bd469a7cf9d0943d8ce24c2ef11d9342541b070319890b2e948a63988b8c0b60d296a35fb4c65cd0502368e7860c009"' }>
                                            <li class="link">
                                                <a href="controllers/TeacherSubjectController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TeacherSubjectController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TeacherSubjectModule-12b738bb25d98f60c5d59be30459f3ce3bd469a7cf9d0943d8ce24c2ef11d9342541b070319890b2e948a63988b8c0b60d296a35fb4c65cd0502368e7860c009"' : 'data-target="#xs-injectables-links-module-TeacherSubjectModule-12b738bb25d98f60c5d59be30459f3ce3bd469a7cf9d0943d8ce24c2ef11d9342541b070319890b2e948a63988b8c0b60d296a35fb4c65cd0502368e7860c009"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TeacherSubjectModule-12b738bb25d98f60c5d59be30459f3ce3bd469a7cf9d0943d8ce24c2ef11d9342541b070319890b2e948a63988b8c0b60d296a35fb4c65cd0502368e7860c009"' :
                                        'id="xs-injectables-links-module-TeacherSubjectModule-12b738bb25d98f60c5d59be30459f3ce3bd469a7cf9d0943d8ce24c2ef11d9342541b070319890b2e948a63988b8c0b60d296a35fb4c65cd0502368e7860c009"' }>
                                        <li class="link">
                                            <a href="injectables/TeacherSubjectService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TeacherSubjectService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TermsModule.html" data-type="entity-link" >TermsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TermsModule-74eaf977797b7a7a725cbc5273248641ff5836b7fafc95d32bd2207df5d3f9ab9fb57b27333ee27c046962f6f2f40262746d16debac81b96cea3defea248cbde"' : 'data-target="#xs-controllers-links-module-TermsModule-74eaf977797b7a7a725cbc5273248641ff5836b7fafc95d32bd2207df5d3f9ab9fb57b27333ee27c046962f6f2f40262746d16debac81b96cea3defea248cbde"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TermsModule-74eaf977797b7a7a725cbc5273248641ff5836b7fafc95d32bd2207df5d3f9ab9fb57b27333ee27c046962f6f2f40262746d16debac81b96cea3defea248cbde"' :
                                            'id="xs-controllers-links-module-TermsModule-74eaf977797b7a7a725cbc5273248641ff5836b7fafc95d32bd2207df5d3f9ab9fb57b27333ee27c046962f6f2f40262746d16debac81b96cea3defea248cbde"' }>
                                            <li class="link">
                                                <a href="controllers/TermsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TermsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TermsModule-74eaf977797b7a7a725cbc5273248641ff5836b7fafc95d32bd2207df5d3f9ab9fb57b27333ee27c046962f6f2f40262746d16debac81b96cea3defea248cbde"' : 'data-target="#xs-injectables-links-module-TermsModule-74eaf977797b7a7a725cbc5273248641ff5836b7fafc95d32bd2207df5d3f9ab9fb57b27333ee27c046962f6f2f40262746d16debac81b96cea3defea248cbde"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TermsModule-74eaf977797b7a7a725cbc5273248641ff5836b7fafc95d32bd2207df5d3f9ab9fb57b27333ee27c046962f6f2f40262746d16debac81b96cea3defea248cbde"' :
                                        'id="xs-injectables-links-module-TermsModule-74eaf977797b7a7a725cbc5273248641ff5836b7fafc95d32bd2207df5d3f9ab9fb57b27333ee27c046962f6f2f40262746d16debac81b96cea3defea248cbde"' }>
                                        <li class="link">
                                            <a href="injectables/TermsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TermsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-f1c2221f8feab7721f82268e1e644b1330681e102fc697bc1f0d3fbf269667a30a2ff884c5a993ca6d9008465a6034b9ee48096bf7b36df1ce43fb1dac21c28d"' : 'data-target="#xs-controllers-links-module-UserModule-f1c2221f8feab7721f82268e1e644b1330681e102fc697bc1f0d3fbf269667a30a2ff884c5a993ca6d9008465a6034b9ee48096bf7b36df1ce43fb1dac21c28d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-f1c2221f8feab7721f82268e1e644b1330681e102fc697bc1f0d3fbf269667a30a2ff884c5a993ca6d9008465a6034b9ee48096bf7b36df1ce43fb1dac21c28d"' :
                                            'id="xs-controllers-links-module-UserModule-f1c2221f8feab7721f82268e1e644b1330681e102fc697bc1f0d3fbf269667a30a2ff884c5a993ca6d9008465a6034b9ee48096bf7b36df1ce43fb1dac21c28d"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-f1c2221f8feab7721f82268e1e644b1330681e102fc697bc1f0d3fbf269667a30a2ff884c5a993ca6d9008465a6034b9ee48096bf7b36df1ce43fb1dac21c28d"' : 'data-target="#xs-injectables-links-module-UserModule-f1c2221f8feab7721f82268e1e644b1330681e102fc697bc1f0d3fbf269667a30a2ff884c5a993ca6d9008465a6034b9ee48096bf7b36df1ce43fb1dac21c28d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-f1c2221f8feab7721f82268e1e644b1330681e102fc697bc1f0d3fbf269667a30a2ff884c5a993ca6d9008465a6034b9ee48096bf7b36df1ce43fb1dac21c28d"' :
                                        'id="xs-injectables-links-module-UserModule-f1c2221f8feab7721f82268e1e644b1330681e102fc697bc1f0d3fbf269667a30a2ff884c5a993ca6d9008465a6034b9ee48096bf7b36df1ce43fb1dac21c28d"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/WorkspaceQuizQuestionOptionsModule.html" data-type="entity-link" >WorkspaceQuizQuestionOptionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-WorkspaceQuizQuestionOptionsModule-1c4f130c6edc0cc041bc4d484b255a32dbc51b2ee9c224b79f9f68f43930c4c2f94f66e0eebf88d193795b15bf1e31aa7e985482fc132ee7fbbb08ec1092086c"' : 'data-target="#xs-controllers-links-module-WorkspaceQuizQuestionOptionsModule-1c4f130c6edc0cc041bc4d484b255a32dbc51b2ee9c224b79f9f68f43930c4c2f94f66e0eebf88d193795b15bf1e31aa7e985482fc132ee7fbbb08ec1092086c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-WorkspaceQuizQuestionOptionsModule-1c4f130c6edc0cc041bc4d484b255a32dbc51b2ee9c224b79f9f68f43930c4c2f94f66e0eebf88d193795b15bf1e31aa7e985482fc132ee7fbbb08ec1092086c"' :
                                            'id="xs-controllers-links-module-WorkspaceQuizQuestionOptionsModule-1c4f130c6edc0cc041bc4d484b255a32dbc51b2ee9c224b79f9f68f43930c4c2f94f66e0eebf88d193795b15bf1e31aa7e985482fc132ee7fbbb08ec1092086c"' }>
                                            <li class="link">
                                                <a href="controllers/WorkspaceQuizQuestionOptionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkspaceQuizQuestionOptionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-WorkspaceQuizQuestionOptionsModule-1c4f130c6edc0cc041bc4d484b255a32dbc51b2ee9c224b79f9f68f43930c4c2f94f66e0eebf88d193795b15bf1e31aa7e985482fc132ee7fbbb08ec1092086c"' : 'data-target="#xs-injectables-links-module-WorkspaceQuizQuestionOptionsModule-1c4f130c6edc0cc041bc4d484b255a32dbc51b2ee9c224b79f9f68f43930c4c2f94f66e0eebf88d193795b15bf1e31aa7e985482fc132ee7fbbb08ec1092086c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-WorkspaceQuizQuestionOptionsModule-1c4f130c6edc0cc041bc4d484b255a32dbc51b2ee9c224b79f9f68f43930c4c2f94f66e0eebf88d193795b15bf1e31aa7e985482fc132ee7fbbb08ec1092086c"' :
                                        'id="xs-injectables-links-module-WorkspaceQuizQuestionOptionsModule-1c4f130c6edc0cc041bc4d484b255a32dbc51b2ee9c224b79f9f68f43930c4c2f94f66e0eebf88d193795b15bf1e31aa7e985482fc132ee7fbbb08ec1092086c"' }>
                                        <li class="link">
                                            <a href="injectables/WorkspaceQuizQuestionOptionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkspaceQuizQuestionOptionsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/WorkspaceQuizQuestionsModule.html" data-type="entity-link" >WorkspaceQuizQuestionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-WorkspaceQuizQuestionsModule-b520c968bb678fb2a947a957f6d5bc33c74983d194bc0368cd62111755553cfe1c3ea4721dc62547856e8d00ae337a74d14e768c6b32e87a391051cff229af8b"' : 'data-target="#xs-controllers-links-module-WorkspaceQuizQuestionsModule-b520c968bb678fb2a947a957f6d5bc33c74983d194bc0368cd62111755553cfe1c3ea4721dc62547856e8d00ae337a74d14e768c6b32e87a391051cff229af8b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-WorkspaceQuizQuestionsModule-b520c968bb678fb2a947a957f6d5bc33c74983d194bc0368cd62111755553cfe1c3ea4721dc62547856e8d00ae337a74d14e768c6b32e87a391051cff229af8b"' :
                                            'id="xs-controllers-links-module-WorkspaceQuizQuestionsModule-b520c968bb678fb2a947a957f6d5bc33c74983d194bc0368cd62111755553cfe1c3ea4721dc62547856e8d00ae337a74d14e768c6b32e87a391051cff229af8b"' }>
                                            <li class="link">
                                                <a href="controllers/WorkspaceQuizQuestionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkspaceQuizQuestionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-WorkspaceQuizQuestionsModule-b520c968bb678fb2a947a957f6d5bc33c74983d194bc0368cd62111755553cfe1c3ea4721dc62547856e8d00ae337a74d14e768c6b32e87a391051cff229af8b"' : 'data-target="#xs-injectables-links-module-WorkspaceQuizQuestionsModule-b520c968bb678fb2a947a957f6d5bc33c74983d194bc0368cd62111755553cfe1c3ea4721dc62547856e8d00ae337a74d14e768c6b32e87a391051cff229af8b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-WorkspaceQuizQuestionsModule-b520c968bb678fb2a947a957f6d5bc33c74983d194bc0368cd62111755553cfe1c3ea4721dc62547856e8d00ae337a74d14e768c6b32e87a391051cff229af8b"' :
                                        'id="xs-injectables-links-module-WorkspaceQuizQuestionsModule-b520c968bb678fb2a947a957f6d5bc33c74983d194bc0368cd62111755553cfe1c3ea4721dc62547856e8d00ae337a74d14e768c6b32e87a391051cff229af8b"' }>
                                        <li class="link">
                                            <a href="injectables/WorkspaceQuizQuestionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkspaceQuizQuestionsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/WorkspacesModule.html" data-type="entity-link" >WorkspacesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-WorkspacesModule-2c21427b3cf157b9343dfc5e01a8bac8adbc3d600751a610a4c6b0c0d5bc7a209c05666f9c30924d65feff1909d5576f6174e67766febbca6ccd36646e01b7e4"' : 'data-target="#xs-controllers-links-module-WorkspacesModule-2c21427b3cf157b9343dfc5e01a8bac8adbc3d600751a610a4c6b0c0d5bc7a209c05666f9c30924d65feff1909d5576f6174e67766febbca6ccd36646e01b7e4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-WorkspacesModule-2c21427b3cf157b9343dfc5e01a8bac8adbc3d600751a610a4c6b0c0d5bc7a209c05666f9c30924d65feff1909d5576f6174e67766febbca6ccd36646e01b7e4"' :
                                            'id="xs-controllers-links-module-WorkspacesModule-2c21427b3cf157b9343dfc5e01a8bac8adbc3d600751a610a4c6b0c0d5bc7a209c05666f9c30924d65feff1909d5576f6174e67766febbca6ccd36646e01b7e4"' }>
                                            <li class="link">
                                                <a href="controllers/WorkspacesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkspacesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-WorkspacesModule-2c21427b3cf157b9343dfc5e01a8bac8adbc3d600751a610a4c6b0c0d5bc7a209c05666f9c30924d65feff1909d5576f6174e67766febbca6ccd36646e01b7e4"' : 'data-target="#xs-injectables-links-module-WorkspacesModule-2c21427b3cf157b9343dfc5e01a8bac8adbc3d600751a610a4c6b0c0d5bc7a209c05666f9c30924d65feff1909d5576f6174e67766febbca6ccd36646e01b7e4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-WorkspacesModule-2c21427b3cf157b9343dfc5e01a8bac8adbc3d600751a610a4c6b0c0d5bc7a209c05666f9c30924d65feff1909d5576f6174e67766febbca6ccd36646e01b7e4"' :
                                        'id="xs-injectables-links-module-WorkspacesModule-2c21427b3cf157b9343dfc5e01a8bac8adbc3d600751a610a4c6b0c0d5bc7a209c05666f9c30924d65feff1909d5576f6174e67766febbca6ccd36646e01b7e4"' }>
                                        <li class="link">
                                            <a href="injectables/WorkspacesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkspacesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/WorkspaceStudentResultsModule.html" data-type="entity-link" >WorkspaceStudentResultsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-WorkspaceStudentResultsModule-62820699d3af1d4b0547e78c79c7641b7c72c6157ee4615f0c9caa914e43daedfe111549573ccdf0cdff57d38e02d32cce286b5ef1590ac2d9d32c3d2545d5a3"' : 'data-target="#xs-controllers-links-module-WorkspaceStudentResultsModule-62820699d3af1d4b0547e78c79c7641b7c72c6157ee4615f0c9caa914e43daedfe111549573ccdf0cdff57d38e02d32cce286b5ef1590ac2d9d32c3d2545d5a3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-WorkspaceStudentResultsModule-62820699d3af1d4b0547e78c79c7641b7c72c6157ee4615f0c9caa914e43daedfe111549573ccdf0cdff57d38e02d32cce286b5ef1590ac2d9d32c3d2545d5a3"' :
                                            'id="xs-controllers-links-module-WorkspaceStudentResultsModule-62820699d3af1d4b0547e78c79c7641b7c72c6157ee4615f0c9caa914e43daedfe111549573ccdf0cdff57d38e02d32cce286b5ef1590ac2d9d32c3d2545d5a3"' }>
                                            <li class="link">
                                                <a href="controllers/WorkspaceStudentResultsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkspaceStudentResultsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-WorkspaceStudentResultsModule-62820699d3af1d4b0547e78c79c7641b7c72c6157ee4615f0c9caa914e43daedfe111549573ccdf0cdff57d38e02d32cce286b5ef1590ac2d9d32c3d2545d5a3"' : 'data-target="#xs-injectables-links-module-WorkspaceStudentResultsModule-62820699d3af1d4b0547e78c79c7641b7c72c6157ee4615f0c9caa914e43daedfe111549573ccdf0cdff57d38e02d32cce286b5ef1590ac2d9d32c3d2545d5a3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-WorkspaceStudentResultsModule-62820699d3af1d4b0547e78c79c7641b7c72c6157ee4615f0c9caa914e43daedfe111549573ccdf0cdff57d38e02d32cce286b5ef1590ac2d9d32c3d2545d5a3"' :
                                        'id="xs-injectables-links-module-WorkspaceStudentResultsModule-62820699d3af1d4b0547e78c79c7641b7c72c6157ee4615f0c9caa914e43daedfe111549573ccdf0cdff57d38e02d32cce286b5ef1590ac2d9d32c3d2545d5a3"' }>
                                        <li class="link">
                                            <a href="injectables/WorkspaceStudentResultsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkspaceStudentResultsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Combination.html" data-type="entity-link" >Combination</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Level1.html" data-type="entity-link" >Level1</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Level2.html" data-type="entity-link" >Level2</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Subject.html" data-type="entity-link" >Subject</a>
                                </li>
                                <li class="link">
                                    <a href="entities/TeacherSubject.html" data-type="entity-link" >TeacherSubject</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Term.html" data-type="entity-link" >Term</a>
                                </li>
                                <li class="link">
                                    <a href="entities/userEntity.html" data-type="entity-link" >userEntity</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateCombinationDto.html" data-type="entity-link" >CreateCombinationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateLevel1Dto.html" data-type="entity-link" >CreateLevel1Dto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateLevel2Dto.html" data-type="entity-link" >CreateLevel2Dto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSubjectDto.html" data-type="entity-link" >CreateSubjectDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTeacherSubjectDto.html" data-type="entity-link" >CreateTeacherSubjectDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTermDto.html" data-type="entity-link" >CreateTermDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/createUserDto.html" data-type="entity-link" >createUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateWorkspaceDto.html" data-type="entity-link" >CreateWorkspaceDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateWorkspaceQuizQuestionDto.html" data-type="entity-link" >CreateWorkspaceQuizQuestionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateWorkspaceQuizQuestionOptionDto.html" data-type="entity-link" >CreateWorkspaceQuizQuestionOptionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateWorkspaceStudentResultDto.html" data-type="entity-link" >CreateWorkspaceStudentResultDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/loginUserDto.html" data-type="entity-link" >loginUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCombinationDto.html" data-type="entity-link" >UpdateCombinationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateLevel1Dto.html" data-type="entity-link" >UpdateLevel1Dto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateLevel2Dto.html" data-type="entity-link" >UpdateLevel2Dto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSubjectDto.html" data-type="entity-link" >UpdateSubjectDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTeacherSubjectDto.html" data-type="entity-link" >UpdateTeacherSubjectDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTermDto.html" data-type="entity-link" >UpdateTermDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateWorkspaceDto.html" data-type="entity-link" >UpdateWorkspaceDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateWorkspaceQuizQuestionDto.html" data-type="entity-link" >UpdateWorkspaceQuizQuestionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateWorkspaceQuizQuestionOptionDto.html" data-type="entity-link" >UpdateWorkspaceQuizQuestionOptionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateWorkspaceStudentResultDto.html" data-type="entity-link" >UpdateWorkspaceStudentResultDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Workspace.html" data-type="entity-link" >Workspace</a>
                            </li>
                            <li class="link">
                                <a href="classes/WorkspaceQuizQuestion.html" data-type="entity-link" >WorkspaceQuizQuestion</a>
                            </li>
                            <li class="link">
                                <a href="classes/WorkspaceQuizQuestionOption.html" data-type="entity-link" >WorkspaceQuizQuestionOption</a>
                            </li>
                            <li class="link">
                                <a href="classes/WorkspaceStudentResult.html" data-type="entity-link" >WorkspaceStudentResult</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthGuard.html" data-type="entity-link" >LocalAuthGuard</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/RolesGuard.html" data-type="entity-link" >RolesGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/userInterface.html" data-type="entity-link" >userInterface</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});