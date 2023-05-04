import { Header } from "../../components/header/Header";
import { List } from "../../components/listPosts/List";
import { ModalDelete } from "../../components/modal/modalDelete/ModalDelete";
import { ModalCreate } from "../../components/modal/modalCreate/ModalCreate";
import { ModalEdit } from "../../components/modal/modalEdit/ModalEdit";
import { useContext } from "react";
import { AdminContext } from "../../providers/AdminContext";

export const AdmPage = () => {
  const { isOpen } = useContext(AdminContext);

  return (
    <>
      <Header />
      <List />
      {isOpen === "Create" ? <ModalCreate /> : null}
      {isOpen === "Delete" ? <ModalDelete /> : null}
      {isOpen === "Edit" ? <ModalEdit /> : null}
    </>
  );
};
