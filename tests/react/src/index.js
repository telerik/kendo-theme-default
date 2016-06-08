import React from 'react'
import ReactDOM from 'react-dom'

import { Slider } from '@telerik/kendo-react-inputs';
import { Dialog } from '@telerik/kendo-react-dialog';
import { Button } from '@telerik/kendo-react-buttons';
import '@telerik/kendo-theme-default/styles/packages/all.scss';

class Container extends React.Component {
    render() {
        return (
            <article>
                <h1>Sample Kendo UI for React Application</h1>

                <h2>Button</h2>
                <table className="chrome-table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Default</th>
                            <th>Primary</th>
                            <th>Icon</th>
                            <th>Icon+Text</th>
                            <th>Primary+Icon</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <th>Disabled</th>
                            <td><Button disabled>Cancel</Button></td>
                            <td><Button disabled primary>Apply</Button></td>
                            <td><Button disabled icon="cog"></Button></td>
                            <td><Button disabled icon="cog">Settings</Button></td>
                            <td><Button disabled primary icon="cog">Settings</Button></td>
                        </tr>

                        <tr>
                            <th>Normal</th>
                            <td><Button>Cancel</Button></td>
                            <td><Button primary>Apply</Button></td>
                            <td><Button icon="cog"></Button></td>
                            <td><Button icon="cog">Settings</Button></td>
                            <td><Button primary icon="cog">Settings</Button></td>
                        </tr>

                        <tr>
                            <th>Hover</th>
                            <td><Button className='__pseudo-hover'>Cancel</Button></td>
                            <td><Button className='__pseudo-hover' primary>Apply</Button></td>
                            <td><Button className='__pseudo-hover' icon="cog"></Button></td>
                            <td><Button className='__pseudo-hover' icon="cog">Settings</Button></td>
                            <td><Button className='__pseudo-hover' primary icon="cog">Settings</Button></td>
                        </tr>

                        <tr>
                            <th>Focused</th>
                            <td><Button className='__pseudo-focus'>Cancel</Button></td>
                            <td><Button className='__pseudo-focus' primary>Apply</Button></td>
                            <td><Button className='__pseudo-focus' icon="cog"></Button></td>
                            <td><Button className='__pseudo-focus' icon="cog">Settings</Button></td>
                            <td><Button className='__pseudo-focus' primary icon="cog">Settings</Button></td>
                        </tr>

                        <tr>
                            <th>Active</th>
                            <td><Button className='__pseudo-focus __pseudo-active'>Cancel</Button></td>
                            <td><Button className='__pseudo-focus __pseudo-active' primary>Apply</Button></td>
                            <td><Button className='__pseudo-focus __pseudo-active' icon="cog"></Button></td>
                            <td><Button className='__pseudo-focus __pseudo-active' icon="cog">Settings</Button></td>
                            <td><Button className='__pseudo-focus __pseudo-active' primary icon="cog">Settings</Button></td>
                        </tr>
                    </tbody>
                </table>
            </article>
        );
    }
}

ReactDOM.render(<Container />, document.querySelector('#main'))
