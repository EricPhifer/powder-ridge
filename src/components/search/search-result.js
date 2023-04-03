import { Link } from 'gatsby';
import { default as React } from 'react';
import {
  connectStateResults,
  Highlight,
  Hits,
  Index,
  PoweredBy,
  Snippet
} from 'react-instantsearch-dom';

const HitCount = connectStateResults(({ searchResults }) => {
    const hitCount = searchResults && searchResults.nbHits;

    return hitCount > 0 ? (
        <div className="HitCount">
            {hitCount} result{hitCount !== 1 ? `s` : ``}
        </div>
    ) : null;
});

function PageHit({ hit }) {
    return (
        <div>
            <Link to={`/posts/${hit.slug.current}`}>
                <h4>
                    <Highlight attribute="title" hit={hit} tagName="mark" />
                </h4>
            </Link>
            <Snippet attribute="excerpt" hit={hit} tagName="mark" />
        </div>
    );
}

function HitsInIndex({ index }) {
    return (
        <Index indexName={index.name}>
            <HitCount />
            <Hits className="Hits" hitComponent={PageHit} />
        </Index>
    );
}

function SearchResult({ indices, className }) {
    return (
        <div className={className}>
            {indices.map((index) => (
                <HitsInIndex index={index} key={index.name} />
            ))}
            <PoweredBy />
        </div>
    );
}

export default SearchResult;
