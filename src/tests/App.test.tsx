import { describe, it } from 'vitest';
import {render} from "@testing-library/react"
import App from '../App';
import { Provider } from 'react-redux';
import { store } from '../app/store';
describe("App Render Test", () => {
    it("App Rendered Correctly", () => {
        render(
            <Provider store={store}>
                <App/>
            </Provider>
        )
    })
})