import React from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby-link';
import { graphql } from 'gatsby';

import { Layout } from '../../components/Layout';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const SubmitButton = styled.button`
  background: ${props => props.theme.palette.primary};
  border: 0;
  border-radius: 0.25rem;
  color: #fff;
  padding: 0.5rem 1rem;
`;

const Input = styled.input`
  border-radius: 0.25rem;
  border: 1px solid #333;
  padding: 0.5rem;
  font-size: 1.25rem;
`;

const TextArea = styled.textarea`
  border-radius: 0.25rem;
  border: 1px solid #333;
  padding: 0.5rem;
  font-size: 1.25rem;
`;

const Field = styled.div`
  padding: 0.5rem 0;
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
`;

type Props = {
  data: {
    headshot: { file: { url: string } };
  };
}
export default class Index extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Layout
        title="A Boston based web developer specializing in performant web applications"
        imageUrl={this.props.data.headshot.file.url}
      >
        <Section>
          <div>
            <div>
              <h1>Contact</h1>
              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <Field>
                  <label htmlFor={'name'}>Your name</label>
                  <div>
                    <Input
                      type="text"
                      name="name"
                      onChange={this.handleChange}
                      id="name"
                      required={true}
                    />
                  </div>
                </Field>
                <Field>
                  <label htmlFor={'email'}>Email</label>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      onChange={this.handleChange}
                      id="email"
                      required={true}
                    />
                  </div>
                </Field>
                <Field>
                  <label htmlFor={'message'}>Message</label>
                  <div>
                    <TextArea
                      name="message"
                      onChange={this.handleChange}
                      id="message"
                      required={true}
                    />
                  </div>
                </Field>
                <Field>
                  <SubmitButton type="submit">Send</SubmitButton>
                </Field>
              </form>
            </div>
          </div>
        </Section>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query ContactPageQuery {
    headshot: contentfulAsset(title: { eq: "Headshot" }) {
      file {
        url
      }
    }
  }
`