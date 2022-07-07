import React from "react";
//import Input from "./common/Input";

const ItemForm = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <div className="row">
        <div className="col">
          <div className="form-group">
            <label>Titre</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={props.item.title}
              onChange={props.onChange}
            />
          </div>
          {/*<Input label={"Titre"} value={props.item.title} name={"title"} type={"text"} onChange={props.onChange} />*/}
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="form-group">
            <label>Categorie</label>
            <input
              type="text"
              className="form-control"
              name="category"
              value={props.item.category}
              onChange={props.onChange}
            />
          </div>
          {/*<Input label={"Categorie"}  value={props.item.category} name={"category"} type={"text"} onChange={props.onChange} />*/}
        </div>
        <div className="col-4">
          <div className="form-group">
            <label>Date</label>
            <input
              type={"date"}
              className="form-control"
              name="date"
              value={props.item.date}
              onChange={props.onChange}
            />
          </div>
          {/*<Input label={"Date"} name={"date"}  value={props.item.date} type={"date"} onChange={props.onChange} />*/}
        </div>
        <div className="col-2">
          <div className="form-group">
            <label>Type Date</label>
            <select
              className="form-control"
              name="dateType"
              value={props.item.dateType}
              onChange={props.onChange}
            >
              <option value={"published"}>PUBLISHED</option>
              <option value={"updated"}>UPDATED</option>
            </select>
          </div>
        </div>
      </div>
      <fieldset>
        <legend>Image</legend>
        <div className="row">
          <div className="col-8">
            {/*<Input label={"Url"} name={"imgUrl"}  value={props.item.image.url} type={"text"} onChange={props.onChange} />*/}
            <div className="form-group">
              <label>Url</label>
              <input
                type="text"
                className="form-control"
                name="image.url"
                value={props.item.image.url}
                onChange={props.onChange}
              />
            </div>
          </div>
          <div className="col-2">
            <div className="form-group">
              <label>Type</label>
              <select
                className="form-control"
                name="image.type"
                value={props.item.image.type}
                onChange={props.onChange}
              >
                <option value={"jpeg"}>JPEG</option>
                <option value={"jpg"}>JPG</option>
                <option value={"png"}>PNG</option>
              </select>
            </div>
          </div>
          <div className="col-2">
            {/*<Input label={"Taille"} name={"imgTaille"} type={"number"}  value={props.item.image.taille} onChange={props.onChange} />*/}
            <div className="form-group">
              <label>Taille</label>
              <input
                type="number"
                className="form-control"
                name="image.taille"
                value={props.item.imgTaille}
                onChange={props.onChange}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="form-group">
              <label>Description</label>
              <input
                type="text"
                className="form-control"
                name="image.description"
                value={props.item.image.description}
                onChange={props.onChange}
              />
            </div>
            {/*<Input
              label={"Description"}
              name={"imgDescription"}
              type={"text"}
              value={props.item.image.description}
              onChange={props.onChange}
  />*/}
          </div>
        </div>
      </fieldset>
      <fieldset>
        <legend>Contenu</legend>
        <div className="row">
          <div className="col-10">
          <div className="form-group">
              <label>Url</label>
              <input
                type="text"
                className="form-control"
                name="content.url"
                value={props.item.content.url}
                onChange={props.onChange}
              />
            </div>
            {/*<Input
              label={"Url"}
              name={"contentUrl"}
              type={"text"}
              value={props.item.content.url}
              onChange={props.onChange}
/>*/}
          </div>
          <div className="col-2">
            <div className="form-group">
              <label>Type</label>
              <select
                value={props.item.content.type}
                onChange={props.onChange}
                className="form-control"
                name="content.type"
              >
                <option value={"text"}>Text</option>
                <option value={"src"}>SRC</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="form-group">
              <label>Description</label>
              <textarea
                name="content.content"
                className="form-control"
                rows={3}
                value={props.item.content.content}
                onChange={props.onChange}
              ></textarea>
            </div>
          </div>
        </div>
      </fieldset>
      <fieldset>
        <label>Créateur</label>
        <div className="row">
          <div className="col-3">
            <div className="form-group">
              <label>Nom</label>
              <input
                type="text"
                className="form-control"
                name="creator.name"
                value={props.item.creator.name}
                onChange={props.onChange}
              />
            </div>
            {/*<Input
              label={"Nom"}
              name={"creatorName"}
              type={"text"}
              value={props.item.creator.name}
              onChange={props.onChange}
/>*/}
          </div>
          <div className="col-3">
            <div className="form-group">
              <label>Mail</label>
              <input
                type="text"
                className="form-control"
                name="creator.mail"
                value={props.item.creator.mail}
                onChange={props.onChange}
              />
            </div>
            {/*<Input
              label={"Mail"}
              name={"creatorMail"}
              type={"text"}
              value={props.item.creator.mail}
              onChange={props.onChange}
/>*/}
          </div>
          <div className="col-2">
            <div className="form-group">
              <label>Type</label>
              <select
                name="creator.type"
                className="form-control"
                value={props.item.creator.type}
                onChange={props.onChange}
              >
                <option value="author">Auteur</option>
                <option value={"contributor"}>Contributeur</option>
              </select>
            </div>
          </div>
          <div className="col-4">
            <div className="form-group">
              <label>Uri</label>
              <input
                type="text"
                className="form-control"
                name="creator.uri"
                value={props.item.creator.uri}
                onChange={props.onChange}
              />
            </div>
            {/*<Input
              label={"Uri"}
              name={"creatorUri"}
              type={"text"}
              value={props.item.creator.uri}
              onChange={props.onChange}
/>*/}
          </div>
        </div>
      </fieldset>
      <button className="btn btn-primary mt-3 mb-3" type="submit">
        Enregistrer
      </button>
    </form>
  );
};

export default ItemForm;
