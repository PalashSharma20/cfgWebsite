<template>
  <footer id="contact">
    <div class="content">
      <div class="col ros-bottom">
        <h1>Join Us</h1>
        <p>
          Want to inspire change? Join us.
          <br />
        </p>
        <a class="no_pace" href="mailto:eastcodingforgood@uwcsea.edu.sg">eastcodingforgood@uwcsea.edu.sg</a>
      </div>
      <div class="col ros-bottom">
        <h1>Start a project</h1>
        <p>
          Have an idea?
          <br />Send a proposal. We love taking on new projects.
        </p>
        <a class="no_pace" href="mailto:eastcodingforgood@uwcsea.edu.sg">eastcodingforgood@uwcsea.edu.sg</a>
      </div>
      <div class="col ros-bottom">
        <h1>Support Us</h1>
        <p>
          Are you interested in supporting our cause?
          <br />Help us through sponsorship or by sharing your expertise.
        </p>
        <a class="no_pace" href="mailto:eastcodingforgood@uwcsea.edu.sg">eastcodingforgood@uwcsea.edu.sg</a>
      </div>
    </div>
    <div class="copyright ros-bottom">
      <span>© 2018 Palash Sharma. All Rights Reserved.</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
footer {
  background: #000;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
}
footer .content {
  display: flex;
  padding: 3.5vmax 0;
}
footer .col {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  color: #fff;
  padding: 3.5vmax;
  flex: 1;
}
footer .col h1 {
  font-size: 2.8vmax;
  font-weight: 400;
  margin-bottom: 1.3vmin;
}
footer .col p {
  font-size: 1vmax;
  margin-bottom: 2.7vmin;
  line-height: 4vmin;
  font-weight: 400;
  color: #555662;
  flex: 1;
}
footer .col a {
  font-size: 1.2vmax;
  color: #fff;
  position: relative;
  padding: 0.4vmax 0;
}
footer .col a:after {
  content: "";
  height: 0.2vmin;
  width: 100%;
  background: #fff;
  position: absolute;
  bottom: 0;
  right: 0;
  transition: 0.3s width cubic-bezier(0.4, 0, 0.2, 1);
}
footer .col a:hover:after {
  width: 2%;
}
footer .copyright {
  padding: 2vmax 6.6vmin;
}
footer .copyright span {
  line-height: 4vmin;
  display: block;
  color: #555662;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.3vmin;
  font-size: 0.8vmax;
}
</style>
