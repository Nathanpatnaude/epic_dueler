// Import statement of three modules from the @apollo/client package
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
// Import statement of three modules from the react-router-dom package for client-side routing
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Import component
import Battle from './components/pages/Battle';
import Footer from './components/Footer';
import Header from './components/Header'
import Home from './components/pages/Home';
import Inventory from './components/pages/Inventory';
import Fight from './components/pages/Fight';
import Login from './components/pages/Login';
import NotFound from './components/NotFound';
import Shop from './components/pages/Shop';
import Signup from './components/pages/Signup';

// Creates a new instance of the ApolloClient 
const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
  });

// Entry point. Defines the structure and layout 
export default function App() {
    return (
      <ApolloProvider client={client}>
        <Router>
        <div className="flex-column justify-flex-start min-100-vh">
            <Header />
            <div className="container">
              <Routes>
                <Route 
                  path="/" 
                  element={<Home />} 
                />
                <Route 
                  path="/login" 
                  element={<Login />} 
                />
                 <Route 
                  path="/signup" 
                  element={<Signup />} 
                />
                 <Route 
                  path="/inventory" 
                  element={<Inventory />} 
                />
                  <Route 
                  path="/fight" 
                  element={<Fight />} 
                />
                  <Route 
                  path="/shop" 
                  element={<Shop />} 
                />
                   <Route 
                  path="/battle" 
                  element={<Battle />} 
                />
                    <Route 
                  path="*" 
                  element={<NotFound />} 
                />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </ApolloProvider>
    );
  }