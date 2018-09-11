import React from 'react';
import { Panel } from 'primereact/panel';
import { SwapiService } from '../../services/SwapiService';
import { DataView, DataViewLayoutOptions } from "primereact/dataview";
import { DataScroller } from 'primereact/datascroller';
import { Dropdown } from "primereact/dropdown";
import { BaseComponent } from '../BaseComponent.js';
import './SwapiData.css';

export class SwapiData extends BaseComponent {

    constructor() {
        super();
        this.state = {
            characters: [],
            character: {},
            characterVal: '',
            movieVal: '',
            movies: []
        };
        this.SwapiService = new SwapiService();
        this.itemTemplate = this.itemTemplate.bind(this);
        this.onMovieChange = this.onMovieChange.bind(this);
        this.onCharacterChange = this.onCharacterChange.bind(this);
    }

    componentDidMount() {
        this.SwapiService.getMovies()
            .then(data => {
                this.setState({ movies: data.results });
            });
    }

    itemTemplate() {
        return (
            <div>
                <div className="p-g-12">
                    <div className="heading">{this.state.character.name.toLowerCase()}</div>
                </div>
                <div className="p-g-6">
                    <div className="pad"><b>Gender:</b> {this.state.character.gender}</div>
                </div>
                <div className="p-g-6">
                    <div className="pad"><b>Height:</b> {this.state.character.height}</div>
                </div>
                <div className="p-g-6">
                    <div className="pad"><b>Weight:</b> {this.state.character.mass}</div>
                </div>
                <div className="p-g-6">
                    <div className="pad"><b>Skin:</b> {this.state.character.skin_color}</div>
                </div>
                <div className="p-g-6">
                    <div className="pad"><b>Eyes:</b> {this.state.character.eye_color}</div>
                </div>
                <div className="p-g-6">
                    <div className="pad"><b>Hair:</b> {this.state.character.hair_color}</div>
                </div>
                <div className="p-g-6">
                    <div className="pad"><b>Birth year:</b> {this.state.character.birth_year}</div>
                </div>
                {
                    Array.apply(null, {length: 10 }).map((e, i) => (
                        <div className="p-g-12" key={i}>
                                &nbsp;
                        </div>
                    ))
                }
            </div>
        );        
    }

    onMovieChange(e) {
        this.state.movieVal = e.value;

        var movieMatched = this.state.movies.filter(movie => {
            return movie.url === e.value;
        })[0];

        this.SwapiService.getCharacters(movieMatched.characters)
            .then(data => {
                var characterDropdown = [];
                data.forEach(character => {
                    var characterObj = JSON.parse(character);
                    characterDropdown.push({ label: characterObj.name, value: characterObj.url });
                });
                this.setState({ characters: characterDropdown });
            });
    }

    onCharacterChange(e) {
        this.state.characterVal = e.value;
        this.SwapiService.getCharacter(e.value)
            .then(data => {
                this.setState({ character: data });
            });
    }

    renderHeader() {
        const movieOptions = [];

        this.state.movies.forEach(movie => {
            movieOptions.push({ label: movie.title, value: movie.url });
        });

        return (
            <div className="p-g">
                <div className="p-g-6" style={{ textAlign: 'left' }}>
                    <Dropdown value={this.state.movieVal} options={movieOptions} placeholder="Select Movie" style={{ width: '100%' }} onChange={this.onMovieChange} />
                </div>
                <div className="p-g-6" style={{ textAlign: 'left' }}>
                    <Dropdown value={this.state.characterVal} options={this.state.characters} placeholder="Select Character" style={{ width: '100%' }} onChange={this.onCharacterChange} />
                </div>
            </div>
        );
    }

    render() {
        const header = this.renderHeader();

        return (
            <div>
                <div>
                    <span className="subheading">Select your favorite Star Wars movie and character for bio information</span>
                </div>
                <div>
                    <DataScroller value={this.state.character} header={header} itemTemplate={this.itemTemplate} rows={1} inline={true}></DataScroller>
                </div>
            </div>
        );
    }
}

export default SwapiData;

