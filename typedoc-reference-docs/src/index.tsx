import {
  Application,
  JSX,
  DefaultTheme,
  PageEvent,
  Reflection,
  DefaultThemeRenderContext,
  Options,
  TypeParameterReflection,
  DeclarationReflection,
  SignatureReflection,
} from "typedoc";

function hasTypeParameters(
  reflection: Reflection
): reflection is Reflection & { typeParameters: TypeParameterReflection[] } {
  if (reflection instanceof DeclarationReflection || reflection instanceof SignatureReflection) {
    return reflection.typeParameters != null;
  }
  return false;
}

function join<T>(joiner: JSX.Children, list: readonly T[], cb: (x: T) => JSX.Children) {
  const result: JSX.Children = [];

  for (const item of list) {
    if (result.length > 0) {
      result.push(joiner);
    }
    result.push(cb(item));
  }

  return <>{result}</>;
}

const header = (context: DefaultThemeRenderContext, props: PageEvent<Reflection>) => (
  <header>
    <div class="tsd-page-toolbar">
      <div class="container">
        <div class="table-wrap">
          <div class="table-cell" id="tsd-search" data-base={context.relativeURL("./")}>
            <div class="field">
              <label for="tsd-search-field" class="tsd-widget search no-caption">
                Search
              </label>
              <input type="text" id="tsd-search-field" />
            </div>

            <ul class="results">
              <li class="state loading">Preparing search index...</li>
              <li class="state failure">The search index is not available</li>
            </ul>

            <a href={context.relativeURL("index.html")} class="title">
              {props.project.name}
            </a>
          </div>

          <div class="table-cell" id="tsd-widgets">
            <div id="tsd-filter">
              <a href="#" class="tsd-widget options no-caption" data-toggle="options">
                Options
              </a>
              <div class="tsd-filter-group">
                <div class="tsd-select" id="tsd-filter-visibility">
                  <span class="tsd-select-label">All</span>
                  <ul class="tsd-select-list">
                    <li data-value="public">Public</li>
                    <li data-value="protected">Public/Protected</li>
                    <li data-value="private" class="selected">
                      All
                    </li>
                  </ul>
                </div>{" "}
                <input type="checkbox" id="tsd-filter-inherited" checked={true} />
                <label class="tsd-widget" for="tsd-filter-inherited">
                  Inherited
                </label>
                {!context.options.getValue("excludeExternals") && (
                  <>
                    <input type="checkbox" id="tsd-filter-externals" checked={true} />
                    <label class="tsd-widget" for="tsd-filter-externals">
                      Externals
                    </label>
                  </>
                )}
              </div>
            </div>

            <a href="#" class="tsd-widget menu no-caption" data-toggle="menu">
              Menu
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="tsd-page-title">
      <div class="container" style="display: flex">
        <img src="/img/logo.svg" style="width: 50px" />
        <div style="margin-left: 10px; display: flex; flex-direction: column; justify-content: center">
          {!!props.model.parent && <ul class="tsd-breadcrumb">{context.breadcrumb(props.model)}</ul>}
          <h1>
            {props.model.kindString !== "Project" && `${props.model.kindString ?? ""} `}
            {props.model.name}
            {hasTypeParameters(props.model) && (
              <>
                {"<"}
                {join(", ", props.model.typeParameters, (item) => item.name)}
                {">"}
              </>
            )}
          </h1>
        </div>
      </div>
    </div>
  </header>
);

function bind<F, L extends any[], R>(fn: (f: F, ...a: L) => R, first: F) {
  return (...r: L) => fn(first, ...r);
}

export class MyThemeContext extends DefaultThemeRenderContext {
  constructor(theme: DefaultTheme, options: Options) {
    super(theme, options);
    this.header = bind(header, this);

    this.analytics = () => (
      <script type="module">
        <JSX.Raw html={`
          import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
          import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";

          const isProd = () => window.location.hostname !== "localhost";
          let analyticsEnabled = false;

          const firebaseConfig = {
            apiKey: "AIzaSyARJVISiYhfj86d1n3wFYcXChqHML3iejQ",
            authDomain: "opencascade-js.firebaseapp.com",
            projectId: "opencascade-js",
            storageBucket: "opencascade-js.appspot.com",
            messagingSenderId: "192043386146",
            appId: "1:192043386146:web:67db78511b3e00d081917b",
            measurementId: "G-F2GYWNDL2E"
          };

          // Initialize Firebase
          const app = initializeApp(firebaseConfig);

          window.startFirebaseAnalytics = () => {
            if (isProd()) {
              analyticsEnabled = true;
              getAnalytics(app); // reports start location automatically
            }
          };
        `} />
      </script>
    )
  }
}

export class MyTheme extends DefaultTheme {
  private _contextCache?: MyThemeContext;

  override getRenderContext(): MyThemeContext {
    this._contextCache ||= new MyThemeContext(
      this,
      this.application.options
    );
    return this._contextCache;
  }
}

export function load(app: Application) {
  app.renderer.hooks.on("head.begin", () => (
    <>
      <link rel="icon" href="/img/favicon.ico" />
      <link rel="stylesheet" href="/cookieconsent/cookieconsent.css" />
      <script src="/cookieconsent/cookieconsent.js" defer />
    </>
  ));
  app.renderer.defineTheme("footer", MyTheme);
}
