import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header Area wrapper Starts */}
      <header id="header-wrap">

        {/* Hero Area Start */}
        <div id="hero-area" className="hero-area-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
                <div className="contents">
                  <h2 className="head-title">Star's Bley Tapeçaria</h2>
                  <p>A Star's Bley esta desde 1995 no ramo automotivo, restaurando, reformando e higienizando o interior de seu veículo. Contamos com os melhores profissionais e materiais de qualidade.</p>
                  <div className="header-button">
                    <a href="#contact" className="btn btn-common">Solicitar Orçamento</a>
                    <a href="#services" className="btn btn-border">Nossos Serviços</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
                <div className="intro-img">
                  <img className="img-fluid" src="/cartoes-on-table-additional-image700x500.jpg" alt="Trabalhos de Tapeçaria" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Area End */}
      </header>
      {/* Header Area wrapper End */}

      {/* Services Section Start */}
      <section id="services" className="section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">Nossos Serviços</h2>
            <div className="shape wow fadeInDown" data-wow-delay="0.3s"></div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 col-xs-12">
              <div className="services-item wow fadeInRight" data-wow-delay="0.3s">
                <div className="icon">
                  <i className="lni lni-car"></i>
                </div>
                <div className="services-content">
                  <h3><a href="#">Reforma de Bancos</a></h3>
                  <p>Reforma completa dos bancos do seu veículo com materiais de alta qualidade e durabilidade.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xs-12">
              <div className="services-item wow fadeInRight" data-wow-delay="0.6s">
                <div className="icon">
                  <i className="lni lni-brush"></i>
                </div>
                <div className="services-content">
                  <h3><a href="#">Restauração de Tetos</a></h3>
                  <p>Recuperamos tetos descolados ou danificados, devolvendo a aparência original do seu carro.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xs-12">
              <div className="services-item wow fadeInRight" data-wow-delay="0.9s">
                <div className="icon">
                  <i className="lni lni-clean"></i>
                </div>
                <div className="services-content">
                  <h3><a href="#">Higienização Completa</a></h3>
                  <p>Limpeza profunda e higienização do interior do veículo, eliminando ácaros, bactérias e odores.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xs-12">
              <div className="services-item wow fadeInRight" data-wow-delay="1.2s">
                <div className="icon">
                  <i className="lni lni-pallet"></i>
                </div>
                <div className="services-content">
                  <h3><a href="#">Tapeçaria Personalizada</a></h3>
                  <p>Trabalhos personalizados com tecidos de sua escolha para deixar seu veículo único.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xs-12">
              <div className="services-item wow fadeInRight" data-wow-delay="1.5s">
                <div className="icon">
                  <i className="lni lni-protection"></i>
                </div>
                <div className="services-content">
                  <h3><a href="#">Proteção de Laterais</a></h3>
                  <p>Instalação de proteções nas laterais das portas para preservar o estofamento original.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xs-12">
              <div className="services-item wow fadeInRight" data-wow-delay="1.8s">
                <div className="icon">
                  <i className="lni lni-reload"></i>
                </div>
                <div className="services-content">
                  <h3><a href="#">Reformas em Geral</a></h3>
                  <p>Reforma de todos os componentes de tapeçaria automotiva com garantia de qualidade.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section End */}

      {/* About Section start */}
      <div id="about" className="about-area section-padding bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-xs-12 info">
              <div className="about-wrapper wow fadeInLeft" data-wow-delay="0.3s">
                <div>
                  <div className="site-heading">
                    <p className="mb-3">Sobre Nós</p>
                    <h2 className="section-title">Star's Bley Tapeçaria</h2>
                  </div>
                  <div className="content">
                    <p>
                      Com anos de experiência no mercado, a Star's Bley Tapeçaria se especializou em reforma, 
                      restauração e higienização do interior de veículos. Nossa equipe qualificada está pronta 
                      para transformar o interior do seu carro, trabalhando com tapeçaria, bancos, tetos e laterais.
                    </p>
                    <p>
                      Utilizamos apenas materiais de primeira qualidade e técnicas avançadas para garantir 
                      durabilidade e satisfação total dos nossos clientes.
                    </p>
                    <a href="#contact" className="btn btn-common mt-3">Entre em Contato</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-xs-12 wow fadeInRight" data-wow-delay="0.3s">
              <img className="img-fluid" src="/banner3393x1235.jpg" alt="Sobre a Star's Bley Tapeçaria" />
            </div>
          </div>
        </div>
      </div>
      {/* About Section End */}

      {/* Features Section Start */}
      <section id="features" className="section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">Nossas Vantagens</h2>
            <div className="shape wow fadeInDown" data-wow-delay="0.3s"></div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div className="content-left">
                <div className="box-item wow fadeInLeft" data-wow-delay="0.3s">
                  <span className="icon">
                    <i className="lni lni-certificate"></i>
                  </span>
                  <div className="text">
                    <h4>Qualidade Garantida</h4>
                    <p>Utilizamos materiais de primeira linha e oferecemos garantia em todos os nossos serviços.</p>
                  </div>
                </div>
                <div className="box-item wow fadeInLeft" data-wow-delay="0.6s">
                  <span className="icon">
                    <i className="lni lni-timer"></i>
                  </span>
                  <div className="text">
                    <h4>Entrega Rápida</h4>
                    <p>Executamos os serviços com agilidade sem abrir mão da qualidade do trabalho.</p>
                  </div>
                </div>
                <div className="box-item wow fadeInLeft" data-wow-delay="0.9s">
                  <span className="icon">
                    <i className="lni lni-money-protection"></i>
                  </span>
                  <div className="text">
                    <h4>Preço Justo</h4>
                    <p>Oferecemos orçamentos competitivos e transparentes, sem surpresas.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div className="show-box wow fadeInUp" data-wow-delay="0.3s">
                <img src="/logo1152x1152.jpg" alt="Star's Bley Tapeçaria" />
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div className="content-right">
                <div className="box-item wow fadeInRight" data-wow-delay="0.3s">
                  <span className="icon">
                    <i className="lni lni-star"></i>
                  </span>
                  <div className="text">
                    <h4>Atendimento Personalizado</h4>
                    <p>Cada cliente recebe atenção especial e soluções customizadas para suas necessidades.</p>
                  </div>
                </div>
                <div className="box-item wow fadeInRight" data-wow-delay="0.6s">
                  <span className="icon">
                    <i className="lni lni-thumbs-up"></i>
                  </span>
                  <div className="text">
                    <h4>Profissionais Qualificados</h4>
                    <p>Nossa equipe é especializada e experiente em tapeçaria automotiva.</p>
                  </div>
                </div>
                <div className="box-item wow fadeInRight" data-wow-delay="0.9s">
                  <span className="icon">
                    <i className="lni lni-home"></i>
                  </span>
                  <div className="text">
                    <h4>Serviço com Comodidade</h4>
                    <p>Buscamos e entregamos seu veículo, proporcionando total comodidade.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section End */}

      {/* Call To Action Section Start */}
      <section id="cta" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-xs-12 wow fadeInLeft" data-wow-delay="0.3s">
              <div className="cta-text">
                <h4>Solicite um orçamento sem compromisso</h4>
                <p>Entre em contato conosco e faça um orçamento para reforma, restauração ou higienização do interior do seu veículo.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-xs-12 text-right wow fadeInRight" data-wow-delay="0.3s">
              <a href="#contact" className="btn btn-common">Solicitar Orçamento</a>
            </div>
          </div>
        </div>
      </section>
      {/* Call To Action Section Start */}

      {/* Contact Section Start */}
      <section id="contact" className="section-padding bg-gray">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title wow fadeInDown" data-wow-delay="0.3s">Entre em Contato</h2>
            <div className="shape wow fadeInDown" data-wow-delay="0.3s"></div>
          </div>
          <div className="row contact-form-area wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-lg-7 col-md-12 col-sm-12">
              <div className="contact-block">
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" className="form-control" id="name" name="name" placeholder="Nome" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" className="form-control" id="email" name="email" placeholder="Email" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" className="form-control" id="phone" name="phone" placeholder="Telefone" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" className="form-control" id="subject" name="subject" placeholder="Assunto" required />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea className="form-control" id="message" name="message" placeholder="Sua Mensagem" rows="5" required></textarea>
                      </div>
                      <div className="submit-button text-left">
                        <button className="btn btn-common" type="submit">Enviar Mensagem</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-xs-12">
              <div className="contact-info">
                <h3>Informações de Contato</h3>
                <div className="contact-info-details">
                  <div className="contact-info-item">
                    <div className="contact-icon">
                      <i className="lni lni-map-marker"></i>
                    </div>
                    <div className="contact-text">
                      <h4>Endereço</h4>
                      <p>Rua Capitão Moraes, 694 18170000 Piedade, SP, Brazil</p>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="contact-icon">
                      <i className="lni lni-phone"></i>
                    </div>
                    <div className="contact-text">
                      <h4>Telefone</h4>
                      <p>(15) 99644-3208</p>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="contact-icon">
                      <i className="lni lni-envelope"></i>
                    </div>
                    <div className="contact-text">
                      <h4>Email</h4>
                      <p>stars.bley@gmail.com</p>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="contact-icon">
                      <i className="lni lni-timer"></i>
                    </div>
                    <div className="contact-text">
                      <h4>Horário de Funcionamento</h4>
                      <p>Segunda a Sexta: 8:30h às 18h</p>
                      <p>Sábado: 8h às 12h</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section End */}

      {/* Footer Section Start */}
      <footer id="footer" className="footer-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 col-mb-12">
              <div className="widget">
                <h3 className="footer-logo">
                  <img src="/logo1152x1152.jpg" alt="Star's Bley Tapeçaria" height="50" />
                </h3>
                <div className="textwidget">
                  <p>Especialistas em reforma, restauração e higienização do interior de autos.</p>
                </div>
                <div className="social-icon">
                  <a className="facebook" href="#"><i className="lni lni-facebook-filled"></i></a>
                  <a className="instagram" href="#"><i className="lni lni-instagram-filled"></i></a>
                  <a className="whatsapp" href="#"><i className="lni lni-whatsapp"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <h3 className="footer-titel">Serviços</h3>
              <ul className="footer-link">
                <li><a href="#">Reforma de Bancos</a></li>
                <li><a href="#">Restauração de Tetos</a></li>
                <li><a href="#">Higienização Completa</a></li>
                <li><a href="#">Tapeçaria Personalizada</a></li>
                <li><a href="#">Proteção de Laterais</a></li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <h3 className="footer-titel">Contato</h3>
              <ul className="address">
                <li>
                  <a href="#"><i className="lni lni-map-marker"></i> Rua Capitão Moraes, 694 18170000 Piedade, SP, Brazil</a>
                </li>
                <li>
                  <a href="#"><i className="lni lni-phone"></i> (15) 99644-3208</a>
                </li>
                <li>
                  <a href="#"><i className="lni lni-envelope"></i> stars.bley@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="copyright-content">
                  <p>Copyright © 2023 Star's Bley Tapeçaria. Todos os direitos reservados.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer Section End */}

      {/* Go to Top Link */}
      <a href="#" className="back-to-top">
        <i className="lni lni-arrow-up"></i>
      </a>
    </div>
  );
}

export default App;