
import React, { Component } from 'react';
import api from '../../services/api';
import moment from 'moment';

import logo from '../../assets/logo.png';

import { Container, Form } from './styles';

import  CompareList from '../../components/compareList';

export default class Main extends Component {
  state = {
    loading: false,
    repositoryError: false,
    repositoryInput: '',
    repositoryKey: 0,
    repositories: [

    ]
  };

  handleAddRepository = async (e) => {
    e.preventDefault();

    this.setState({loading: true})

    try {
      const { data: repository } = await api.get(`/repos/${this.state.repositoryInput}`);

      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState({
        repositoryInput: '',
        repositories: [...this.state.repositories, repository],
        repositoryError: false,
        repositoryKey: ++this.state.repositoryKey
      })

      localStorage.setItem(this.state.repositoryKey, JSON.stringify(repository));

    } catch (error) {
      this.setState({repositoryError: true})
      console.log(error)
    } finally {
      this.setState({loading: false})
    }
  }

  render() {
    return (
      <Container>
        <img src={logo} alt="github compare" />

        <Form withError={this.state.repositoryError} onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="usuário/repositório"
            value={this.state.repositoryInput}
            onChange={e => this.setState({repositoryInput: e.target.value})}
          />
          <button>{ this.state.loading ? <i className="fa fa-spinner fa-pulse"></i>: 'ok' }</button>
        </Form>

        <CompareList repositories={this.state.repositories} />
      </Container>
    )
  }
}
