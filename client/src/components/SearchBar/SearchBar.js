import React, { PureComponent } from 'react';
import { Formik } from 'formik';

import { Wrap, InputField, SearchButton } from './SearchBar.style';

class SearchBar extends PureComponent {
  render() {
    const { placeholder, buttonLabel } = this.props;
    return (
      <Wrap>
        <Formik
          initialValues={{
            keyword: '',
          }}
          onSubmit={(values) => {
            this.props.onSearch(values.keyword);
          }}
          render={props => (
            <form onSubmit={props.handleSubmit}>
              <InputField
                className="anim-scale-in anim-delay-750"
                placeholder={placeholder || 'Search..'}
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.keyword}
                name="keyword"
              />
              <SearchButton type="submit" className="anim-scale-in anim-delay-1000">
                {buttonLabel || 'Search'}
              </SearchButton>
            </form>
          )}
        />        
      </Wrap>
    );
  }
}

export default SearchBar;
