import * as React from 'react';
export default class FormBlock extends React.Component<any> {
    state: {
        submitted: boolean;
        error: boolean;
    };
    formRef: React.RefObject<HTMLFormElement>;
    formHandler(data: any, url: any): import("axios").AxiosPromise<any>;
    handleSubmit(event: any, formAction: any): void;
    componentDidUpdate(prevProps: any, prevState: any): void;
    render(): JSX.Element;
}
//# sourceMappingURL=index.d.ts.map