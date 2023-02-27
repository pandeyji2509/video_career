import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import VideoComponent from './VideoComponent';
import Apply from './Apply';
function routes() {
    return (
            <Router>
                <Routes>
                <Route path="/"
                        exact element={<VideoComponent />}></Route>
                    <Route path="/Apply"
                        exact element={<Apply />}>
                    </Route>
                </Routes>
            </Router>
    )
}

export default routes
