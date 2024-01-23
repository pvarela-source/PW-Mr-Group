import React from "react";
import ModalImage from "react-modal-image";
import Breadcrumb from "../components/common/Breadcrumb";
import MainLayout from "../layout/MainLayout";
function GalleryPage() {
  return (
    <MainLayout>
      <Breadcrumb pageName="Gallery" pageTitle="Gallery" />
      <div className="gallery-section bg-color2 pt-120 pb-120" id="next">
        <div className="container">
          <div className="row align-items-center justify-content-center g-4">
            <div className="col-lg-4 col-sm-6 col-12">
              <ModalImage
                small="assets/images/gallery/gallery1.jpg"
                large="assets/images/gallery/gallery1.jpg"
                showRotate={true}
                hideZoom={true}
              />
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <ModalImage
                small="assets/images/gallery/gallery2.jpg"
                large="assets/images/gallery/gallery2.jpg"
                showRotate={true}
                hideZoom={true}
              />
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <ModalImage
                small="assets/images/gallery/gallery3.jpg"
                large="assets/images/gallery/gallery3.jpg"
                showRotate={true}
                hideZoom={true}
              />
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <ModalImage
                small="assets/images/gallery/gallery4.jpg"
                large="assets/images/gallery/gallery4.jpg"
                showRotate={true}
                hideZoom={true}
              />
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <ModalImage
                small="assets/images/gallery/gallery5.jpg"
                large="assets/images/gallery/gallery5.jpg"
                showRotate={true}
                hideZoom={true}
              />
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <ModalImage
                small="assets/images/gallery/gallery6.jpg"
                large="assets/images/gallery/gallery6.jpg"
                showRotate={true}
                hideZoom={true}
              />
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <ModalImage
                small="assets/images/gallery/gallery7.jpg"
                large="assets/images/gallery/gallery7.jpg"
                showRotate={true}
                hideZoom={true}
              />
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <ModalImage
                small="assets/images/gallery/gallery8.jpg"
                large="assets/images/gallery/gallery8.jpg"
                showRotate={true}
                hideZoom={true}
              />
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <ModalImage
                small="assets/images/gallery/gallery9.jpg"
                large="assets/images/gallery/gallery9.jpg"
                showRotate={true}
                hideZoom={true}
              />
            </div>
          </div>
          <div className="row d-flex justify-content-center mt-60">
            <div className="col-lg-4 text-center">
              <a href="#" className="eg-btn btn--primary-five btn--lg">
                Load More
              </a>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default GalleryPage;
