class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(email: params[:session][:email].downcase)

    # Memoization Code
    if user && user.authenticate(params[:session][:password])
      log_in user
      params[:session][:remember_me] == 1 ? remember(user) : forget(user)
      redirect_to user  # redirect_to user_url(@user)
    else
      flash.now[:danger] = 'Invalid email/password combination'
      render 'new'
    end
  end

  def forgot_password
  end
end
